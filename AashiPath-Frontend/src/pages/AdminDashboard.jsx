import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSignOutAlt,
  FaTrash,
  FaReply,
  FaSearch,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const API_BASE = import.meta.env.VITE_API_BASE || "";

const getContactName = (contact) =>
  contact.fullName || [contact.firstName, contact.lastName].filter(Boolean).join(" ");

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedContact, setSelectedContact] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [replyLoading, setReplyLoading] = useState(false);
  const replyModalRef = useRef();

  const token = localStorage.getItem("adminToken");
  const adminInfo = JSON.parse(localStorage.getItem("adminInfo") || "{}");

  const fetchContacts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE}/api/admin/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        setContacts(data.data);
      } else {
        if (response.status === 401) {
          localStorage.clear();
          navigate("/admin/login");
        } else {
          setStatus({
            type: "error",
            message: data.message || "Failed to fetch contacts",
          });
        }
      }
    } catch {
      setStatus({
        type: "error",
        message: "Error fetching contacts",
      });
    } finally {
      setLoading(false);
    }
  }, [navigate, token]);

  const filteredContacts = useMemo(() => {
    let filtered = contacts;
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (normalizedQuery) {
      filtered = filtered.filter(
        (contact) =>
          getContactName(contact).toLowerCase().includes(normalizedQuery) ||
          contact.email.toLowerCase().includes(normalizedQuery)
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((contact) => contact.status === statusFilter);
    }

    return filtered;
  }, [contacts, searchQuery, statusFilter]);

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }
    fetchContacts();
  }, [fetchContacts, navigate, token]);

  const handleDeleteContact = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/api/admin/contacts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        setContacts(contacts.filter((c) => c._id !== id));
        setStatus({
          type: "success",
          message: "Contact deleted successfully",
        });
        setTimeout(() => setStatus(null), 3000);
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to delete contact",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Error deleting contact",
      });
    }
  };

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`${API_BASE}/api/admin/contacts/${id}/status`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();

      if (data.success) {
        setContacts(
          contacts.map((c) => (c._id === id ? data.data : c))
        );
        setStatus({
          type: "success",
          message: "Status updated",
        });
        setTimeout(() => setStatus(null), 2000);
      }
    } catch {
      setStatus({
        type: "error",
        message: "Error updating status",
      });
    }
  };

  const handleSendReply = async (e) => {
    e.preventDefault();
    if (!replyText.trim()) {
      setStatus({
        type: "error",
        message: "Reply message cannot be empty",
      });
      return;
    }

    setReplyLoading(true);

    try {
      const response = await fetch(
        `${API_BASE}/api/admin/contacts/${selectedContact._id}/reply`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ response: replyText }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setContacts(
          contacts.map((c) => (c._id === selectedContact._id ? data.data : c))
        );
        setSelectedContact(null);
        setReplyText("");
        setStatus({
          type: "success",
          message: "Reply sent successfully",
        });
        setTimeout(() => setStatus(null), 3000);
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to send reply",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Error sending reply",
      });
    } finally {
      setReplyLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin/login");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "replied":
        return "bg-yellow-100 text-yellow-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-sm text-gray-600">Welcome, {adminInfo.name}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Messages */}
        {status && (
          <div
            className={`mb-6 rounded-lg border px-4 py-3 text-sm font-medium ${
              status.type === "success"
                ? "bg-green-50 border-green-200 text-green-800"
                : "bg-red-50 border-red-200 text-red-800"
            }`}
          >
            {status.type === "success" ? "✓" : "✕"} {status.message}
          </div>
        )}

        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow mb-6 p-6">
          <h2 className="text-lg font-semibold mb-4">Filters & Search</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search (Name / Email)
              </label>
              <div className="relative">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="replied">Replied</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contacts Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-gray-600">
              Loading contacts...
            </div>
          ) : filteredContacts.length === 0 ? (
            <div className="p-8 text-center text-gray-600">
              No contacts found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Subject
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredContacts.map((contact) => (
                    <tr
                      key={contact._id}
                      className="hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {getContactName(contact)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <FaEnvelope className="text-xs" />
                          {contact.email}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <FaPhone className="text-xs" />
                          {contact.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                        {contact.subject}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={contact.status}
                          onChange={(e) =>
                            handleUpdateStatus(contact._id, e.target.value)
                          }
                          className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer border-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${getStatusColor(
                            contact.status
                          )}`}
                        >
                          <option value="new">New</option>
                          <option value="replied">Replied</option>
                          <option value="resolved">Resolved</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedContact(contact)}
                            className="text-sky-600 hover:text-sky-700 p-2 hover:bg-sky-50 rounded transition"
                            title="Send Reply"
                          >
                            <FaReply />
                          </button>
                          <button
                            onClick={() => handleDeleteContact(contact._id)}
                            className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded transition"
                            title="Delete"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Reply Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            ref={replyModalRef}
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6"
          >
            <h3 className="text-lg font-bold mb-4 text-gray-900">
              Reply to {getContactName(selectedContact)}
            </h3>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Subject:</strong> {selectedContact.subject}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Email:</strong> {selectedContact.email}
              </p>
              <div className="mt-3 bg-white p-3 rounded border-l-4 border-sky-500">
                <p className="text-sm text-gray-700">{selectedContact.message}</p>
              </div>
            </div>

            <form onSubmit={handleSendReply} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Reply *
                </label>
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply here..."
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={replyLoading}
                  className="flex-1 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-60"
                >
                  {replyLoading ? "Sending..." : "Send Reply"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedContact(null);
                    setReplyText("");
                  }}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold py-2 rounded-lg transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
