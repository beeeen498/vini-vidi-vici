"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./ReserveTable.module.scss";

const ReserveTable = () => {
    const [selectedParty, setSelectedParty] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const isFormValid =
        selectedParty !== null &&
        selectedDate !== null &&
        selectedTime !== null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 🔥 stops page refresh / navigation
        console.log("Form submitted!");
    };

    return (
        <section id="reserve" className={styles.reservationSection}>
            {/* video */}
            <video
                src="/videos/Reserve/date.mp4"
                autoPlay
                muted
                loop
                playsInline
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
                    <option value="18:00">18:00</option>
                    <option value="18:30">18:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                    <option value="22:00">22:00</option>
                    </select>
                </div>

                <div className={styles.formActions}>
                    <button
                        type="submit"
                        className={styles.submitButton}
                    >
                        Reserve Table
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ReserveTable;