"use client";

import React, { useState } from "react";
// This assumes the Stock.css file is imported
import "./stock.css";

const Stock = () => {
  const [amount, setAmount] = useState("");
  const [stocks, setStocks] = useState("");
  const [risk, setRisk] = useState("Low");
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const simulatePrediction = (investmentAmount, riskLevel) => {
    let baseRate = 0;
    let variance = 0;
    switch (riskLevel) {
      case "Low":
        baseRate = 0.05;
        variance = 0.02;
        break;
      case "Medium":
        baseRate = 0.12;
        variance = 0.05;
        break;
      case "High":
        baseRate = 0.25;
        variance = 0.1;
        break;
    }
    const randomFactor = (Math.random() - 0.5) * 2;
    const returnRate = baseRate + randomFactor * variance;
    const expectedReturnAmount = investmentAmount * returnRate;

    return {
      rate: returnRate,
      return: expectedReturnAmount,
    };
  };

  const handlePredict = async () => {
    if (!amount || !stocks) {
      setError("Please fill in all fields");
      return;
    }

    const parsedAmount = parseFloat(amount);
    const parsedStocks = parseInt(stocks, 10);

    if (parsedAmount <= 0) {
      setError("Investment amount must be greater than 0");
      return;
    }

    if (parsedStocks <= 0) {
      setError("Number of stocks must be greater than 0");
      return;
    }

    setLoading(true);
    setError("");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const simulatedResult = simulatePrediction(parsedAmount, risk);

    setPrediction({
      amount: parsedAmount,
      rate: (simulatedResult.rate * 100).toFixed(2),
      return: simulatedResult.return.toFixed(2),
    });

    setLoading(false);
  };

  return (
    <div className="stock-section">
      <div className="container stock-container">
        <h2 className="section-title gradient-title">Stock Predictor</h2>
        <p className="section-subtitle">
          Enter your details to get a stock return prediction
        </p>

        <label className="stock-label">Investment Amount (₹)</label>
        <input
          type="number"
          placeholder="Enter amount"
          className="stock-input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          step="0.01"
          min="0"
        />

        <label className="stock-label">Number of Stocks</label>
        <input
          type="number"
          placeholder="Enter number of stocks"
          className="stock-input stocks-input"
          value={stocks}
          onChange={(e) => setStocks(e.target.value)}
          min="1"
        />

        <label className="stock-label">Risk Factor</label>
        <select
          className="stock-input"
          value={risk}
          onChange={(e) => setRisk(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button
          className="stock-button"
          onClick={handlePredict}
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict"}
        </button>

        {error && (
          <div className="error-message">
            <strong>Error:</strong> {error}
          </div>
        )}

        {prediction && (
          <div className="stock-prediction">
            <h3 className="prediction-title">Prediction Results</h3>
            <div className="prediction-card">
              <div className="prediction-item">
                <span className="prediction-label">Initial Investment</span>
                <span className="prediction-value">
                  ₹{parseFloat(prediction.amount).toLocaleString()}
                </span>
              </div>
              <div className="prediction-item">
                <span className="prediction-label">Expected Return Rate</span>
                <span className="prediction-value highlight">
                  {prediction.rate}%
                </span>
              </div>
              <div className="prediction-item">
                <span className="prediction-label">Expected Return Amount</span>
                <span className="prediction-value success">
                  ₹{parseFloat(prediction.return).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stock;
