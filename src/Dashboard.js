import React from "react";
import classImg from './class.jpg';
import { FaHome, FaUserCheck, FaShieldAlt, FaEye, FaBell, FaChartBar } from "react-icons/fa"; // Example icons

const sidebarItems = [
  { label: "Overview", icon: <FaHome /> },
  { label: "Attendance", icon: <FaUserCheck /> },
  { label: "Safety", icon: <FaShieldAlt /> },
  { label: "Engagement", icon: <FaEye /> },
  { label: "Notifications", icon: <FaBell /> },
  { label: "Reports & Analytics", icon: <FaChartBar /> },
];

const alerts = [
  { text: "Fall Detected", color: "#b04e56", icon: "!" },
  { text: "Absent Notification", color: "#b04e56", icon: "🔔" },
  { text: "SOS Alert", color: "#b04e56", icon: "🆘" },
];

const Dashboard = () => (
  <div style={{ display: "flex", height: "100vh", background: "#22252a", color: "#fff" }}>
    {/* Sidebar */}
    <aside style={{ minWidth: 240, background: "#252630", padding: 24 }}>
      <h2 style={{ fontWeight: "bold", fontSize: 30, marginBottom: 45 }}>
        AI-Powered Smart<br />Attendance & Safety Dashboard
      </h2>
      <nav>
        {sidebarItems.map(item => (
          <div
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 28,
              color: item.label === "Overview" ? "#43eddf" : "#bbb",
              fontWeight: item.label === "Overview" ? "bold" : "normal"
            }}
          >
            <span style={{ marginRight: 13 }}>{item.icon}</span>
            {item.label}
          </div>
        ))}
      </nav>
    </aside>

    {/* Main Content */}
    <main style={{ flexGrow: 1, padding: 36 }}>
      {/* Top Row */}
      <div style={{ display: "flex", gap: 24 }}>
        {/* Classroom Image */}
        <div style={{ flex: 1, background: "#333", minHeight: 190, borderRadius: 16, overflow: "hidden" }}>
          <img src={classImg} alt="Classroom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        
        {/* Alerts */}
        <div style={{
          flex: 1,
          background: "#292930",
          borderRadius: 16,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: 16
        }}>
          <h3 style={{ fontSize: 21, fontWeight: "bold", marginBottom: 2 }}>Alerts</h3>
          {alerts.map(alert => (
            <div
              key={alert.text}
              style={{
                background: alert.color,
                padding: 18,
                borderRadius: 10,
                color: "#fff",
                marginBottom: 7
              }}
            >
              {alert.text}
            </div>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 20,
        marginTop: 35
      }}>
        {/* Attendance Today */}
        <div style={{
          background: "#21354c",
          borderRadius: 13,
          padding: 24,
          flex: 1
        }}>
          <h4 style={{ marginBottom: 10 }}>Attendance Today</h4>
          <p>
            <span style={{ color: "#43eddf" }}>✔</span> X present<br />
            <span style={{ color: "#d3d3d3" }}>✖</span> Y absent
          </p>
        </div>
        {/* Fall Incidents */}
        <div style={{
          background: "#b04e56",
          borderRadius: 13,
          padding: 24,
          flex: 1
        }}>
          <h4>Fall Incidents</h4>
          <span style={{ fontSize: 21 }}>1</span>
        </div>
        {/* Drowsy Students */}
        <div style={{
          background: "#383946",
          borderRadius: 13,
          padding: 24,
          flex: 1
        }}>
          <h4>Drowsy Students</h4>
          <span style={{ fontSize: 21 }}>2</span>
        </div>
        {/* Engagement Rate */}
        <div style={{
          background: "#f2bb52",
          borderRadius: 13,
          padding: 24,
          flex: 1,
          color: "#272727",
          fontWeight: "bold"
        }}>
          <h4>Engagement Rate</h4>
          <span style={{ fontSize: 34 }}>78%</span>
        </div>
      </div>

      {/* Chart Row */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 16,
        marginTop: 35
      }}>
        {/* Attendance Trend (placeholder line chart) */}
        <div style={{
          background: "#2e3541",
          borderRadius: 13,
          padding: 24,
          flex: 2
        }}>
          <h4>Attendance Trend (Last 7 Days)</h4>
          <div style={{ height: 80, background: "#233" }}> {/* Chart placeholder */} </div>
        </div>
        {/* Absenteeism by Student (placeholder bar chart) */}
        <div style={{
          background: "#2e3541",
          borderRadius: 13,
          padding: 24,
          flex: 1
        }}>
          <h4>Absentees by Student</h4>
          <div style={{ height: 80, background: "#233" }}> {/* Chart placeholder */} </div>
        </div>
        {/* Heatmap (placeholder) */}
        <div style={{
          background: "#2e3541",
          borderRadius: 13,
          padding: 24,
          flex: 1
        }}>
          <div style={{ height: 80, background: "#233" }}> {/* Chart placeholder */} </div>
        </div>
      </div>

      <footer style={{ marginTop: 35, textAlign: "center", color: "#bcbcbc" }}>
        Powered by AI Surveillance + LLM Assistant
      </footer>
    </main>
  </div>
);

export default Dashboard;
