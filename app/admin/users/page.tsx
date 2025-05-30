"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Search,
  Filter,
  UserPlus,
  MoreVertical,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  CheckCircle,
  XCircle,
  AlertCircle,
  Download,
  Trash2,
  Edit2,
  Lock,
  User,
  Users,
  UserCheck,
  Clock,
  Activity,
} from "lucide-react";

export default function UsersPage() {
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const users = [
    {
      id: 1,
      name: "Abdullah Ahmad",
      email: "abdullah@example.com",
      role: "User",
      status: "Active",
      location: "Dubai, UAE",
      joinDate: "Jan 15, 2024",
      lastActive: "2 hours ago",
      verified: true,
      avatar:
        "https://ui-avatars.com/api/?name=Abdullah+Ahmad&background=random",
      phone: "+971 50 123 4567",
      questionsAsked: 15,
      answersReceived: 12,
    },
    {
      id: 2,
      name: "Sarah Mohammed",
      email: "sarah@example.com",
      role: "Scholar",
      status: "Active",
      location: "Riyadh, KSA",
      joinDate: "Dec 10, 2023",
      lastActive: "5 mins ago",
      verified: true,
      avatar:
        "https://ui-avatars.com/api/?name=Sarah+Mohammed&background=random",
      phone: "+966 50 987 6543",
      questionsAnswered: 45,
      rating: 4.9,
    },
    {
      id: 3,
      name: "Ibrahim Hassan",
      email: "ibrahim@example.com",
      role: "Moderator",
      status: "Away",
      location: "Cairo, Egypt",
      joinDate: "Feb 1, 2024",
      lastActive: "1 day ago",
      verified: true,
      avatar:
        "https://ui-avatars.com/api/?name=Ibrahim+Hassan&background=random",
      phone: "+20 100 123 4567",
      reportsHandled: 89,
      responseTime: "2h avg",
    },
  ];

  const roles = [
    { value: "all", label: "All Roles", count: 1250 },
    { value: "user", label: "Users", count: 1024 },
    { value: "scholar", label: "Scholars", count: 56 },
    { value: "moderator", label: "Moderators", count: 12 },
    { value: "admin", label: "Administrators", count: 8 },
  ];

  const statuses = [
    { value: "all", label: "All Statuses" },
    { value: "active", label: "Active" },
    { value: "away", label: "Away" },
    { value: "suspended", label: "Suspended" },
  ];

  const stats = [
    {
      title: "Total Users",
      value: "1,250",
      change: "+12.5%",
      icon: Users,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Active Today",
      value: "456",
      change: "+5.8%",
      icon: Activity,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Verified Users",
      value: "890",
      change: "+8.2%",
      icon: UserCheck,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "New This Week",
      value: "125",
      change: "+15.3%",
      icon: UserPlus,
      color: "bg-yellow-50 text-yellow-600",
    },
  ];

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">User Management</h1>
          <p className="text-gray-600">Manage and monitor user accounts</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button className="gap-2">
            <UserPlus className="w-4 h-4" />
            Add User
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <span className="text-sm text-green-600">
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search users..." className="pl-10" />
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <select
              className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              {roles.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label} ({role.count})
                </option>
              ))}
            </select>
            <select
              className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {statuses.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {showFilters && (
          <div className="mt-4 pt-4 border-t grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Join Date
              </label>
              <div className="grid grid-cols-2 gap-2">
                <Input type="date" placeholder="From" />
                <Input type="date" placeholder="To" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <Input placeholder="Filter by location" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Verification
              </label>
              <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                <option>All</option>
                <option>Verified</option>
                <option>Unverified</option>
              </select>
            </div>
          </div>
        )}
      </Card>

      {/* Users List */}
      <div className="space-y-4">
        {users.map((user) => (
          <Card key={user.id} className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* User Info */}
              <div className="flex items-center gap-4 flex-1">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{user.name}</h3>
                    {user.verified && (
                      <CheckCircle className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {user.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      {user.phone}
                    </span>
                  </div>
                </div>
              </div>

              {/* Role & Status */}
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    user.role === "Scholar"
                      ? "bg-purple-50 text-purple-600"
                      : user.role === "Moderator"
                      ? "bg-blue-50 text-blue-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {user.role}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    user.status === "Active"
                      ? "bg-green-50 text-green-600"
                      : "bg-yellow-50 text-yellow-600"
                  }`}
                >
                  {user.status}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Lock className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-red-500">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-4 pt-4 border-t grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>Joined {user.joinDate}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Last active {user.lastActive}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Activity className="w-4 h-4" />
                <span>
                  {user.role === "Scholar"
                    ? `${user.questionsAnswered} answers`
                    : user.role === "Moderator"
                    ? `${user.reportsHandled} reports`
                    : `${user.questionsAsked} questions`}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">Showing 1-10 of 1,250 users</p>
        <div className="flex gap-2">
          <Button variant="outline" className="w-10 h-10 p-0">
            1
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0">
            2
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0">
            3
          </Button>
          <span className="w-10 h-10 flex items-center justify-center">
            ...
          </span>
          <Button variant="outline" className="w-10 h-10 p-0">
            50
          </Button>
        </div>
      </div>
    </div>
  );
}
