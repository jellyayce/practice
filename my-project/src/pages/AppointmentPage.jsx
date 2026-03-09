import { useState, useEffect, useRef } from "react";
import PageWrapper from "../components/PageWrapper";
import "cally";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function AppointmentPage() {
  const [othersChecked, setOthersChecked] = useState(false);
  const [othersText, setOthersText] = useState("");

  const [date, setDate] = useState("Pick a date");

  const calRef = useRef(null);
  useEffect(() => {
    const cal = calRef.current;

    if (!cal) return;

    const handleChange = (e) => {
      setDate(e.target.value);
    };

    cal.addEventListener("change", handleChange);

    return () => {
      cal.removeEventListener("change", handleChange);
    };
  }, []);

  function handleClearButton() {
    setDate("Pick a date");
  }

  const buttons = [
    "9:00am",
    "10:00am",
    "11:00am",
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
    "5:00pm",
    "6:00pm",
    "7:00pm",
    "8:00pm",
    "9:00pm",
  ];
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div>
      <Navbar></Navbar>
      <PageWrapper>
        <div className="relative w-full h-30">
          <div className="absolute inset-0 bg-[url('/appointmentpagepic1.png')] bg-cover bg-center brightness-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white gap-2">
            <p className="text-6xl font-extrabold">Book an Appointment</p>
            <p className="text-2xl font-light">
              Schedule your visit and secure a mechanic ahead of time.
            </p>
          </div>
        </div>
        <div className="flex flex-row px-4 gap-4">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 border p-4">
            <legend className="fieldset-legend text-3xl font-extrabold">
              CUSTOMER INFORMATION
            </legend>

            <label className="label text-black">Full Name</label>
            <input type="text" className="input w-full" />

            <label className="label text-black">Phone Number</label>
            <input type="text" className="input w-full" />

            <label className="label text-black">Email Address</label>
            <input type="text" className="input w-full" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 border p-4">
            <legend className="fieldset-legend text-3xl font-extrabold">
              MOTORCYCLE INFORMATION
            </legend>

            <label className="label text-black">Motorcycle Brand</label>
            <input type="text" className="input w-full" />

            <label className="label text-black">Motorcycle Model</label>
            <input type="text" className="input w-full" />

            <label className="label text-black">Year Model</label>
            <input type="text" className="input w-full" />
          </fieldset>
        </div>
        <div className="flex px-4">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-screen border p-4">
            <legend className="fieldset-legend text-3xl font-extrabold">
              SELECT SERVICE
            </legend>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <label className="label">
                <input type="checkbox" className="checkbox" />
                General Checkup
              </label>
              <label className="label">
                <input type="checkbox" className="checkbox" />
                Change Oil
              </label>
              <label className="label">
                <input type="checkbox" className="checkbox" />
                Electrical Repair
              </label>
              <label className="label">
                <input type="checkbox" className="checkbox" />
                Tire Service
              </label>
              <label className="label">
                <input type="checkbox" className="checkbox" />
                Diagnostics
              </label>
              <label className="label">
                <input type="checkbox" className="checkbox" />
                Brake Repair
              </label>
              <label className="label">
                <input type="checkbox" className="checkbox" />
                Engine Repair
              </label>
              <div>
                <label className="label">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={othersChecked}
                    onChange={(e) => setOthersChecked(e.target.checked)}
                  />
                  Others
                </label>
                {othersChecked && (
                  <input
                    type="text"
                    placeholder="Please specify"
                    className="input input-bordered w-full"
                    value={othersText}
                    onChange={(e) => setOthersText(e.target.value)}
                  />
                )}
              </div>
            </div>
          </fieldset>
        </div>
        <div className="px-4 pb-4">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-6">
            <legend className="fieldset-legend text-3xl font-extrabold">
              Choose Appointment Date & Time
            </legend>

            <div className="grid grid-cols-2 gap-8">
              {/* LEFT SIDE CONTROLS */}
              <div className="flex flex-col gap-5">
                {/* DATE */}
                <div>
                  <label className="label text-black">Select a Date</label>
                  <div className="flex gap-2 items-center">
                    <button
                      popoverTarget="cally-popover1"
                      className="input input-bordered w-48"
                      id="cally1"
                      style={{ anchorName: "--cally1" }}
                    >
                      {date}
                    </button>

                    <button className="btn btn-sm" onClick={handleClearButton}>
                      Clear
                    </button>
                  </div>

                  <div
                    popover="auto"
                    id="cally-popover1"
                    className="dropdown bg-base-100 rounded-box shadow-lg"
                    style={{ positionAnchor: "--cally1" }}
                  >
                    <calendar-date class="cally" ref={calRef}>
                      <calendar-month></calendar-month>
                    </calendar-date>
                  </div>
                </div>

                <div>
                  <details className="dropdown w-48">
                    <summary className="btn btn-outline w-full">
                      Choose Mechanic
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box w-full p-2 shadow">
                      <li>
                        <a>John Doe</a>
                      </li>
                      <li>
                        <a>John Doink</a>
                      </li>
                    </ul>
                  </details>
                </div>

                <div className="flex gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-500 rounded"></div>
                    <span>Available</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-600 rounded"></div>
                    <span>Booked</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="grid grid-cols-4 gap-4">
                  {buttons.map((button, index) => (
                    <Button
                      label={button}
                      key={index}
                      onClick={() =>
                        setSelectedIndex(selectedIndex === index ? null : index)
                      }
                      isSelected={selectedIndex === index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </PageWrapper>
    </div>
  );
}
