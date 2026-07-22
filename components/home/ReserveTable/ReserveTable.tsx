"use client";

import { useState } from "react";
import LazyVideo from "@/components/global/LazyVideo/LazyVideo";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./ReserveTable.module.scss";

const ReserveTable = () => {
  const [selectedParty, setSelectedParty] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const isFormValid =
    selectedParty !== null && selectedDate !== null && selectedTime !== null;

  const isTimeDisabled = (time: string) => {
    if (!selectedDate) return false;

    const today = new Date();
    const isToday =
      selectedDate.getFullYear() === today.getFullYear() &&
      selectedDate.getMonth() === today.getMonth() &&
      selectedDate.getDate() === today.getDate();

    if (!isToday) return false;

    // compare the time option against current time
    const [hours, minutes] = time.split(":").map(Number);
    const now = today.getHours() * 60 + today.getMinutes();
    const optionTime = hours * 60 + minutes;

    return optionTime <= now;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setShowToast(true);

    // reset form
    setSelectedParty(null);
    setSelectedDate(null);
    setSelectedTime(null);

    // hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section id="reserve" className={styles.reservationSection}>
      {/* video */}
      <LazyVideo
        src="/videos/Reserve/date.mp4"
        className={styles.reserveVideo}
      />

      {/* title */}
      <h2 className={styles.sectionTitle}>Reserve Your Experience</h2>

      {/* form */}
      <form className={styles.reservationForm} onSubmit={handleSubmit}>
        {/* Party size */}
        <div className={styles.formField}>
          <label htmlFor="partySize" className={styles.formLabel}>
            Party Size
          </label>
          <select
            id="partySize"
            name="partySize"
            className={styles.formSelect}
            value={selectedParty ?? ""}
            onChange={(e) => setSelectedParty(e.target.value)}
          >
            <option value="" disabled>
              Select number of guests
            </option>
            {[...Array(8)].map((_, i) => (
              <option key={i + 1} value={(i + 1).toString()}>
                {i + 1} guest{i > 0 && "s"}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div className={styles.formField}>
          <label className={styles.formLabel}>Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            minDate={new Date()}
            placeholderText="Select a date"
            className={styles.formSelect}
          />
        </div>

        {/* Time */}
        <div className={styles.formField}>
          <label htmlFor="reservationTime" className={styles.formLabel}>
            Time
          </label>
          <select
            id="reservationTime"
            name="reservationTime"
            className={styles.formSelect}
            value={selectedTime ?? ""}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="" disabled>
              Select a time
            </option>
            <option value="18:00" disabled={isTimeDisabled("18:00")}>
              18:00
            </option>
            <option value="18:30" disabled={isTimeDisabled("18:30")}>
              18:30
            </option>
            <option value="19:00" disabled={isTimeDisabled("19:00")}>
              19:00
            </option>
            <option value="19:30" disabled={isTimeDisabled("19:30")}>
              19:30
            </option>
            <option value="20:00" disabled={isTimeDisabled("20:00")}>
              20:00
            </option>
            <option value="20:30" disabled={isTimeDisabled("20:30")}>
              20:30
            </option>
            <option value="21:00" disabled={isTimeDisabled("21:00")}>
              21:00
            </option>
            <option value="21:30" disabled={isTimeDisabled("21:30")}>
              21:30
            </option>
            <option value="22:00" disabled={isTimeDisabled("22:00")}>
              22:00
            </option>
          </select>
        </div>

        <div className={styles.formActions}>
          <button type="submit" className={styles.submitButton}>
            Reserve Table
          </button>
        </div>
      </form>

      {/* toast */}
      {showToast && (
        <div className={styles.toast}>
          Reservation confirmed! We look forward to seeing you.
        </div>
      )}
    </section>
  );
};

export default ReserveTable;
