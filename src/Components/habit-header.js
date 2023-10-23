export default function HabitHeader() {
    return (
        <div class="container my-5">
  <div class="p-5 text-center bg-body-tertiary rounded-3">
    <h1 class="text-body-emphasis">Habit Tracker</h1>
    <image src="%PUBLIC_URL%/healthy-lifestyle.png" alt="app-logo" />
    {/* <image src="/healthy-lifestyle.png" alt="app-logo" /> */}
    <p class="col-lg-8 mx-auto fs-5 text-muted">
    We are what we repeatedly do. <code>Excellence</code>, then, is not an act, but a habit.
    </p>
    <div class="d-inline-flex gap-2 mb-5">
      <button class="d-inline-flex align-items-center btn btn-success btn-lg px-4 rounded-pill" type="button">
        Daily View
        
      </button>
      <button class="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
        Weekly View
      </button>
    </div>
  </div>
</div>)
}