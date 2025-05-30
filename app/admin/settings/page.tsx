"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Settings,
  Globe,
  Bell,
  Shield,
  Mail,
  Smartphone,
  Database,
  HardDrive,
  Cloud,
  Key,
  Lock,
  UserCog,
  Palette,
  Moon,
  Sun,
  Languages,
  MessageSquare,
  AlertTriangle,
  Save,
  RefreshCw,
  CheckCircle,
  X,
  Info,
  Download,
} from "lucide-react";

export default function SettingsPage() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState({
    newQuestions: true,
    answers: true,
    reports: true,
    system: false,
  });

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">System Settings</h1>
          <p className="text-gray-600">
            Manage your application settings and configurations
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Reset
          </Button>
          <Button className="gap-2">
            <Save className="w-4 h-4" />
            Save Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general" className="gap-2">
            <Settings className="w-4 h-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="appearance" className="gap-2">
            <Palette className="w-4 h-4" />
            Appearance
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Shield className="w-4 h-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="system" className="gap-2">
            <Database className="w-4 h-4" />
            System
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <div className="grid gap-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6">Site Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Site Name
                  </label>
                  <Input defaultValue="IslamicQA" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Site Description
                  </label>
                  <Textarea
                    defaultValue="Islamic Questions & Answers Platform"
                    className="min-h-[100px]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Email
                  </label>
                  <Input defaultValue="contact@islamicqa.com" type="email" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6">Localization</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Default Language
                  </label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                    <option>English</option>
                    <option>Arabic</option>
                    <option>French</option>
                    <option>Urdu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time Zone
                  </label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                    <option>UTC</option>
                    <option>GMT+4 (Dubai)</option>
                    <option>GMT+5 (Pakistan)</option>
                    <option>GMT-5 (New York)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date Format
                  </label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                    <option>DD/MM/YYYY</option>
                    <option>MM/DD/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance">
          <div className="grid gap-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6">Theme Settings</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Color Theme
                  </label>
                  <div className="grid grid-cols-6 gap-4">
                    {[
                      "#008060",
                      "#2563eb",
                      "#7c3aed",
                      "#db2777",
                      "#ea580c",
                      "#059669",
                    ].map((color) => (
                      <button
                        key={color}
                        className="w-full aspect-square rounded-lg border-2 hover:scale-105 transition-transform"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Dark Mode</h3>
                    <p className="text-sm text-gray-600">
                      Enable dark mode for the admin panel
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Font Size
                  </label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6">Layout Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Compact Mode</h3>
                    <p className="text-sm text-gray-600">
                      Reduce spacing between elements
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Show Breadcrumbs</h3>
                    <p className="text-sm text-gray-600">
                      Display navigation path
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                    defaultChecked
                  />
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications">
          <div className="grid gap-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6">
                Email Notifications
              </h2>
              <div className="space-y-4">
                {Object.entries(emailNotifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Receive notifications for {key.toLowerCase()}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) =>
                        setEmailNotifications({
                          ...emailNotifications,
                          [key]: e.target.checked,
                        })
                      }
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6">Push Notifications</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Enable Push Notifications</h3>
                    <p className="text-sm text-gray-600">
                      Receive notifications on your device
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notification Sound
                  </label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                    <option>Default</option>
                    <option>None</option>
                    <option>Custom</option>
                  </select>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <div className="grid gap-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6">
                Authentication Settings
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-600">
                      Add an extra layer of security
                    </p>
                  </div>
                  <Button variant="outline">Configure 2FA</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Session Timeout</h3>
                    <p className="text-sm text-gray-600">
                      Automatically log out after inactivity
                    </p>
                  </div>
                  <select className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>4 hours</option>
                    <option>Never</option>
                  </select>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6">Password Policy</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Minimum Password Length</h3>
                    <p className="text-sm text-gray-600">
                      Set minimum characters required
                    </p>
                  </div>
                  <Input type="number" defaultValue="8" className="w-24" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Require Special Characters</h3>
                    <p className="text-sm text-gray-600">
                      Must include symbols (!@#$%^&*)
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                    defaultChecked
                  />
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* System Settings */}
        <TabsContent value="system">
          <div className="grid gap-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6">System Status</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Maintenance Mode</h3>
                    <p className="text-sm text-gray-600">
                      Put the site in maintenance mode
                    </p>
                  </div>
                  <Button
                    variant={maintenanceMode ? "destructive" : "outline"}
                    onClick={() => setMaintenanceMode(!maintenanceMode)}
                    className="gap-2"
                  >
                    {maintenanceMode ? (
                      <>
                        <X className="w-4 h-4" />
                        Disable
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Enable
                      </>
                    )}
                  </Button>
                </div>

                {maintenanceMode && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-800">Warning</h4>
                        <p className="text-sm text-yellow-700 mt-1">
                          Maintenance mode will make the site inaccessible to
                          regular users. Only administrators will be able to
                          access the site.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 text-green-600 mb-2">
                      <Cloud className="w-5 h-5" />
                      <h4 className="font-medium">System Status</h4>
                    </div>
                    <p className="text-green-800">Operational</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                      <HardDrive className="w-5 h-5" />
                      <h4 className="font-medium">Storage Usage</h4>
                    </div>
                    <p className="text-blue-800">45.8 GB / 100 GB</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-2 text-purple-600 mb-2">
                      <Database className="w-5 h-5" />
                      <h4 className="font-medium">Database Size</h4>
                    </div>
                    <p className="text-purple-800">2.3 GB</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6">Backup Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Backup Frequency
                  </label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Retention Period
                  </label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                    <option>7 days</option>
                    <option>30 days</option>
                    <option>90 days</option>
                  </select>
                </div>
                <Button variant="outline" className="gap-2">
                  <Cloud className="w-4 h-4" />
                  Create Backup Now
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold">System Logs</h2>
                  <p className="text-sm text-gray-600">
                    View recent system activity
                  </p>
                </div>
                <Button variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download Logs
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  {
                    type: "info",
                    message: "System backup completed successfully",
                    time: "2 hours ago",
                  },
                  {
                    type: "warning",
                    message: "High CPU usage detected",
                    time: "5 hours ago",
                  },
                  {
                    type: "error",
                    message: "Failed login attempt detected",
                    time: "1 day ago",
                  },
                ].map((log, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      log.type === "info"
                        ? "bg-blue-50"
                        : log.type === "warning"
                        ? "bg-yellow-50"
                        : "bg-red-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Info
                        className={`w-5 h-5 ${
                          log.type === "info"
                            ? "text-blue-600"
                            : log.type === "warning"
                            ? "text-yellow-600"
                            : "text-red-600"
                        }`}
                      />
                      <span className="text-sm">{log.message}</span>
                    </div>
                    <span className="text-xs text-gray-500">{log.time}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
