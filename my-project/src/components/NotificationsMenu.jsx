import React from "react";

export default function NotificationsMenu() {
  return (
    <div className="flex justify-center flex-1 p-4">
      <div className="flex flex-col p-8 gap-6 bg-base-100 shadow-xl border border-base-200 rounded-3xl w-full max-w-2xl">
        <div className="flex flex-col gap-1">
          <h2 className="font-black text-4xl tracking-tight text-base-content">
            Notifications
          </h2>
          <p className="text-base-content/60 text-sm">
            Manage how and when you receive updates.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {[
            {
              title: "Appointment Reminders",
              desc: "Get notified about your upcoming visits.",
            },
            {
              title: "Parts Availability Alerts",
              desc: "Know the second your parts arrive in stock.",
            },
            {
              title: "Promotions & Special Deals",
              desc: "Exclusive discounts and seasonal offers.",
            },
            {
              title: "System Announcements",
              desc: "Important updates regarding your account.",
            },
          ].map((item, index) => (
            <label
              key={index}
              className="group flex flex-row items-center justify-between p-4 rounded-2xl border border-transparent hover:border-base-300 hover:bg-base-200 transition-all cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="font-bold text-lg group-hover:text-primary transition-colors">
                  {item.title}
                </span>
                <span className="text-sm text-base-content/50 font-normal">
                  {item.desc}
                </span>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="toggle toggle-primary toggle-lg"
              />
            </label>
          ))}
        </div>

        <div className="pt-4 border-t border-base-200 flex justify-end">
          <button className="btn btn-ghost btn-sm text-base-content/40">
            Restore Defaults
          </button>
        </div>
      </div>
    </div>
  );
}
