import React from "react";

export default function NotificationsMenu() {
  return (
    <div className="flex justify-center flex-1">
      <div className="flex flex-col p-6 gap-8 bg-base-200 border border-base-300 rounded-box w-2xl">
        <h2 className="font-extrabold text-3xl text-black">Notifications</h2>
        <div className="flex flex-col gap-6 text-xl font-medium">
          <div className="flex flex-row items-center justify-between">
            <span>Appointment Reminders</span>
            <input type="checkbox" defaultChecked className="toggle" />
          </div>
          <div className="flex flex-row items-center justify-between">
            <span>Parts Availability Alerts</span>
            <input type="checkbox" defaultChecked className="toggle" />
          </div>
          <div className="flex flex-row items-center justify-between">
            <span>Promotions & Special Deals</span>
            <input type="checkbox" defaultChecked className="toggle" />
          </div>
          <div className="flex flex-row items-center justify-between">
            <span>System Announcements</span>
            <input type="checkbox" defaultChecked className="toggle" />
          </div>
        </div>
      </div>
    </div>
  );
}
