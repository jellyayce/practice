import React from "react";

export default function ThemeMenu() {
  return (
    <div className="flex justify-center flex-1 p-4">
      <div className="flex flex-col p-8 gap-6 bg-base-100 shadow-xl border border-base-200 rounded-3xl w-full max-w-2xl">
        <div className="flex flex-col gap-1">
          <h2 className="font-black text-4xl tracking-tight text-base-content">
            Theme
          </h2>
          <p className="text-base-content/60 text-sm">
            Adjust the visual appearance of your dashboard.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="group flex flex-row items-center justify-between p-4 rounded-2xl border border-transparent hover:border-base-300 hover:bg-base-200 transition-all cursor-pointer">
            <div className="flex flex-col">
              <span className="font-bold text-lg group-hover:text-red-800 transition-colors">
                Dark Mode
              </span>
              <span className="text-sm text-base-content/50 font-normal">
                Switch between light and dark visual themes.
              </span>
            </div>

            <input
              type="checkbox"
              defaultChecked
              className="toggle toggle-lg"
            />
          </label>
        </div>

        <div className="pt-4 border-t border-base-200 flex justify-end">
          <button className="btn btn-ghost btn-sm text-base-content/40">
            Sync with System
          </button>
        </div>
      </div>
    </div>
  );
}
