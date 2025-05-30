"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Settings,
  Bell,
  Shield,
  Key,
  Globe,
  BookOpen,
  Clock,
  Edit2,
  Camera,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Save,
  Trash2,
  LogOut,
  Moon,
  Sun,
  Volume2,
  Languages,
  Lock,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { useAuth } from "@/providers/auth-provider";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [editMode, setEditMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    updates: false,
    newsletter: true,
  });
  const { logout } = useAuth();

  const userProfile = {
    name: "Farhad Ahmad",
    email: "farhadzafari10@gmail.com",
    phone: "+0093 70 896 9829",
    location: "Dubai, UAE",
    joinDate: "January 2024",
    avatar: "https://avatars.githubusercontent.com/u/146546972?v=4",
    language: "English",
    timezone: "GMT+4",
  };

  const recentActivity = [
    {
      type: "question",
      title: "Asked a question about prayer times",
      date: "2 hours ago",
    },
    {
      type: "bookmark",
      title: "Saved an article about Ramadan",
      date: "1 day ago",
    },
    {
      type: "answer",
      title: "Received an answer about Zakat",
      date: "2 days ago",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              Account Settings
            </h1>
            <p className="text-gray-600">
              Manage your account preferences and settings
            </p>
          </div>

          <Button
            variant="destructive"
            className="gap-2"
            onClick={() => {
              logout();
            }}
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card - Left Sidebar */}
          <Card className="p-6 lg:col-span-1">
            <div className="text-center mb-6">
              <div className="relative inline-block">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <h2 className="text-xl font-semibold">{userProfile.name}</h2>
              <p className="text-gray-600 text-sm">{userProfile.email}</p>
              <div className="flex items-center justify-center gap-2 mt-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Member since {userProfile.joinDate}</span>
              </div>
            </div>

            <div className="space-y-4 border-t pt-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>{userProfile.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>{userProfile.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>{userProfile.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Globe className="w-4 h-4 text-gray-400" />
                <span>{userProfile.language}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>{userProfile.timezone}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {activity.type === "question" && (
                        <BookOpen className="w-4 h-4 text-primary" />
                      )}
                      {activity.type === "bookmark" && (
                        <BookOpen className="w-4 h-4 text-primary" />
                      )}
                      {activity.type === "answer" && (
                        <CheckCircle className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{activity.title}</p>
                      <span className="text-xs text-gray-500">
                        {activity.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Settings Tabs - Right Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid grid-cols-4 gap-4 bg-transparent">
                <TabsTrigger
                  value="profile"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger
                  value="preferences"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Preferences
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Security
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">
                      Profile Information
                    </h3>
                    <Button
                      variant="outline"
                      onClick={() => setEditMode(!editMode)}
                      className="gap-2"
                    >
                      <Edit2 className="w-4 h-4" />
                      {editMode ? "Cancel" : "Edit Profile"}
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <Input
                          defaultValue={userProfile.name}
                          disabled={!editMode}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <Input
                          defaultValue={userProfile.email}
                          disabled={!editMode}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <Input
                          defaultValue={userProfile.phone}
                          disabled={!editMode}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Location
                        </label>
                        <Input
                          defaultValue={userProfile.location}
                          disabled={!editMode}
                        />
                      </div>
                    </div>

                    {editMode && (
                      <div className="flex justify-end gap-4 pt-4 border-t">
                        <Button
                          variant="outline"
                          onClick={() => setEditMode(false)}
                        >
                          Cancel
                        </Button>
                        <Button className="gap-2">
                          <Save className="w-4 h-4" />
                          Save Changes
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-6">
                    Notification Settings
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-gray-600">
                          Receive email updates about your activity
                        </p>
                      </div>
                      <div className="flex items-center h-6">
                        <input
                          type="checkbox"
                          checked={notifications.email}
                          onChange={(e) =>
                            setNotifications({
                              ...notifications,
                              email: e.target.checked,
                            })
                          }
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Push Notifications</p>
                        <p className="text-sm text-gray-600">
                          Receive push notifications on your device
                        </p>
                      </div>
                      <div className="flex items-center h-6">
                        <input
                          type="checkbox"
                          checked={notifications.push}
                          onChange={(e) =>
                            setNotifications({
                              ...notifications,
                              push: e.target.checked,
                            })
                          }
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Product Updates</p>
                        <p className="text-sm text-gray-600">
                          Receive updates about new features
                        </p>
                      </div>
                      <div className="flex items-center h-6">
                        <input
                          type="checkbox"
                          checked={notifications.updates}
                          onChange={(e) =>
                            setNotifications({
                              ...notifications,
                              updates: e.target.checked,
                            })
                          }
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Newsletter</p>
                        <p className="text-sm text-gray-600">
                          Receive our weekly newsletter
                        </p>
                      </div>
                      <div className="flex items-center h-6">
                        <input
                          type="checkbox"
                          checked={notifications.newsletter}
                          onChange={(e) =>
                            setNotifications({
                              ...notifications,
                              newsletter: e.target.checked,
                            })
                          }
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="preferences">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-6">Preferences</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Dark Mode</p>
                        <p className="text-sm text-gray-600">
                          Toggle dark mode theme
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setDarkMode(!darkMode)}
                      >
                        {darkMode ? (
                          <Moon className="h-4 w-4" />
                        ) : (
                          <Sun className="h-4 w-4" />
                        )}
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="font-medium mb-2">Language</p>
                        <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                          <option>English</option>
                          <option>Arabic</option>
                          <option>French</option>
                          <option>Spanish</option>
                        </select>
                      </div>

                      <div>
                        <p className="font-medium mb-2">Time Zone</p>
                        <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                          <option>GMT+4 (Dubai)</option>
                          <option>GMT+0 (London)</option>
                          <option>GMT-5 (New York)</option>
                          <option>GMT+8 (Singapore)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-6">
                    Security Settings
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-4">Change Password</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Current Password
                          </label>
                          <Input type="password" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                          </label>
                          <Input type="password" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm New Password
                          </label>
                          <Input type="password" />
                        </div>
                        <Button className="gap-2">
                          <Key className="w-4 h-4" />
                          Update Password
                        </Button>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <h4 className="font-medium mb-4">
                        Two-Factor Authentication
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Add an extra layer of security to your account by
                        enabling two-factor authentication.
                      </p>
                      <Button variant="outline" className="gap-2">
                        <Shield className="w-4 h-4" />
                        Enable 2FA
                      </Button>
                    </div>

                    <div className="pt-6 border-t">
                      <h4 className="font-medium mb-4 text-red-600">
                        Danger Zone
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Once you delete your account, there is no going back.
                        Please be certain.
                      </p>
                      <Button variant="destructive" className="gap-2">
                        <Trash2 className="w-4 h-4" />
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
