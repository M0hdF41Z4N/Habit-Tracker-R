export default function HabitHeader({view,toggleView}) {
  return (
    // Header Container
    <div className="container my-5">
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        {/* <img src="../assets/healthy-lifestyle.png" alt="app-logo" /> */}
        <img src="%PUBLIC_URL%/healthy-lifestyle.png" alt="app-logo" />
        {/* Main Heading */}
        <h1 className="text-body-emphasis">Habit Tracker</h1>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          We are what we repeatedly do. <code>Excellence</code>, then, is not an
          act, but a habit.
        </p>
        {/* Habit Views */}
        <div className="d-inline-flex gap-2 mb-5">
          {/* Daily View Button */}
          <button
            className={
              "d-inline-flex align-items-center btn  btn-lg px-4 rounded-pill " +
              (view === "Daily" ? "btn-success" : "btn-outline-secondary")
            }
            type="button"
            onClick={() => {
              toggleView("Daily");
            }}
          >
            Daily View
          </button>
          {/* Weekly View Button */}
          <button
            className={
              "btn  btn-lg px-4 rounded-pill " +
              (view === "Weekly" ? "btn-success" : "btn-outline-secondary")
            }
            type="button"
            onClick={() => {
              toggleView("Weekly");
            }}
          >
            Weekly View
          </button>
        </div>
      </div>
    </div>
  );
}