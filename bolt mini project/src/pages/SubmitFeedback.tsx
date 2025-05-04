import { useState } from "react";
import axios from "axios";

type SentimentResult = {
  vader_neg: number;
  vader_neu: number;
  vader_pos: number;
  vader_compound: number;
  roberta_neg: number;
  roberta_neu: number;
  roberta_pos: number;
};

const SubmitFeedback = () => {
  const [formData, setFormData] = useState({
    category: "product",
    message: "",
    rating: 3,
  });

  const [result, setResult] = useState<SentimentResult | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/analyze", {
        text: formData.message,
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 shadow-md rounded-lg bg-white mt-10">
      <h2 className="text-2xl font-bold mb-4">Submit Feedback</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          Category:
          <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="product">Product</option>
            <option value="service">Service</option>
          </select>
        </label>
        <label className="block">
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded" />
        </label>
        <label className="block">
          Rating (1-5):
          <input type="number" name="rating" min="1" max="5" value={formData.rating} onChange={handleChange} className="w-full p-2 border rounded" />
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Analyze Sentiment
        </button>
      </form>

      {result && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Sentiment Analysis Result:</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>VADER Negative: {result.vader_neg.toFixed(2)}</p>
              <p>VADER Neutral: {result.vader_neu.toFixed(2)}</p>
              <p>VADER Positive: {result.vader_pos.toFixed(2)}</p>
              <p>VADER Compound: {result.vader_compound.toFixed(2)}</p>
            </div>
            <div>
              <p>RoBERTa Negative: {result.roberta_neg.toFixed(2)}</p>
              <p>RoBERTa Neutral: {result.roberta_neu.toFixed(2)}</p>
              <p>RoBERTa Positive: {result.roberta_pos.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitFeedback;
