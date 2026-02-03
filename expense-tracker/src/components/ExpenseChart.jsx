import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ expenses }) {
  const categoryTotals = expenses.reduce((acc, expense) => {
    const cat = expense.category || "Other";
    acc[cat] = (acc[cat] || 0) + expense.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: "Expenses by Category",
        data: Object.values(categoryTotals),
        backgroundColor: [
          "#f87171", "#34d399", "#60a5fa", "#fbbf24", "#a78bfa"
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "400px", height: "400px", margin: "0 auto" }}>
        <Pie data={data} />
    </div>
  );
}

export default ExpenseChart;
