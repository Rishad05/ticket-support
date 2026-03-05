
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import CustomerTickets from './components/CustomerTickets/CustomerTickets';
import Footer from './components/Footer/Footer';

const fetchTickets = async () => {

  let res = await fetch('/tickets.json');
  let data = await res.json();
  return data
}
function App() {
  const [tasks, setTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const customerTicketsPromise = fetchTickets();

  const handleTaskInProgress = (ticket) => {
    const newTicket = [...tasks, ticket];
    setTasks(newTicket);
  };



  const handleTaskResolved = (ticket) => {
    const newTicket = tasks.filter((task) => task.id !== ticket.id);
    setTasks(newTicket);
    const newResolvedTicket = [...resolvedTasks, ticket];
    setResolvedTasks(newResolvedTicket);
  };

  //  console.log(tasks);
  return (
    <div className="app-bg bg-[#F5F5F5] py-10">
      <div className="main-wrapper max-w-7xl mx-auto px-4">
        <Navbar />
        <Banner tasks={tasks} resolvedTasks={resolvedTasks} />

        <div className="dashboard-grid grid grid-cols-1 lg:grid-cols-12 gap-4 mt-5">

          <div className="tickets-area lg:col-span-9">
            <Suspense
              fallback={
                <span className="loading loading-spinner loading-xl"></span>
              }
            >
              <CustomerTickets customerTicketsPromise={customerTicketsPromise} handleTaskInProgress={handleTaskInProgress} />
            </Suspense>
          </div>

          <div className="task-status-area lg:col-span-3">
            <h1 className="status-heading text-2xl font-bold mb-4">
              Task Status
            </h1>

            <div className="status-list grid grid-cols-1 gap-4">

              {/* Complete Ticket */}
              {
                tasks.length === 0 ?

                  <div className="status-card card bg-base-100 shadow-xl">
                    <div className="status-card-body card-body">
                      <h4 className="status-card-title font-bold">
                        Select a ticket to see details and mark it as complete.
                      </h4>
                    </div>
                  </div>

                  : tasks.map((task) => (
                    <div key={task.id} className="status-card card bg-base-100 shadow-xl">
                      <div className="status-card-body card-body">
                        <h4 className="status-card-title font-bold">
                          {task.title}
                        </h4>

                        <div className="status-complete bg-green-600 text-white p-2 rounded mt-2" onClick={handleTaskResolved.bind(null, task)}>
                          Complete
                        </div>
                      </div>
                    </div>
                  ))

              }



              {/* Resolved Task */}
              {
                resolvedTasks.length === 0 ?
                  <div className="resolved-card card bg-base-100 shadow-xl">
                    <div className="resolved-card-body card-body">
                      <h2 className="resolved-title card-title" > Resolved Tasks </h2>
                      <p className="resolved-text">
                        No resolved tasks yet.
                      </p>
                    </div>
                  </div>
                  : resolvedTasks.map((task) => (
                    <div key={task.id} className="resolved-card card bg-[#E0E7FF] shadow-xl">
                      <div className="resolved-card-body card-body">
                        <h2 className="resolved-title card-title">
                          {task.title}
                        </h2>
                       
                      </div>
                    </div>
                  ))
              }


            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
