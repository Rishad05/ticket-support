
import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import CustomerTickets from './components/CustomerTickets/CustomerTickets';

const fetchTickets = async () => {

  let res = await fetch('/tickets.json');
  let data = await res.json();
  return data
}
function App() {

  const customerTicketsPromise = fetchTickets();

  return (
    <div className="app-bg bg-[#F5F5F5] py-10">
      <div className="main-wrapper max-w-7xl mx-auto px-4">
        <Navbar />
        <Banner />

        <div className="dashboard-grid grid grid-cols-1 lg:grid-cols-12 gap-4 mt-5">

          <div className="tickets-area lg:col-span-9">
            <Suspense
              fallback={
                <span className="loading loading-spinner loading-xl"></span>
              }
            >
              <CustomerTickets customerTicketsPromise={customerTicketsPromise} />
            </Suspense>
          </div>

          <div className="task-status-area lg:col-span-3">
            <h1 className="status-heading text-2xl font-bold mb-4">
              Task Status
            </h1>

            <div className="status-list grid grid-cols-1 gap-4">

              {/* Complete Ticket */}
              <div className="status-card card bg-base-100 shadow-xl">
                <div className="status-card-body card-body">
                  <h4 className="status-card-title font-bold">
                    Payment Failed - Card Declined
                  </h4>

                  <div className="status-complete bg-green-600 text-white p-2 rounded mt-2">
                    Complete
                  </div>
                </div>
              </div>

              {/* Resolved Task */}
              <div className="resolved-card card bg-base-100 shadow-xl">
                <div className="resolved-card-body card-body">
                  <h2 className="resolved-title card-title">
                    Resolved Task
                  </h2>
                  <p className="resolved-text">
                    No resolved tasks yet.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
