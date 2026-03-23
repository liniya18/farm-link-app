import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, TrendingUp, AlertCircle, ArrowUpRight, ArrowDownRight, BrainCircuit, Loader2, RefreshCw } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { MOCK_PRODUCE } from '../constants';

export const FarmerAIInsights: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [insights, setInsights] = useState<{
    predictions: { crop: string; trend: 'up' | 'down'; percentage: number; reason: string }[];
    recommendations: { title: string; description: string }[];
    marketAlerts: string[];
  } | null>(null);

  const generateInsights = async () => {
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const model = "gemini-3-flash-preview";
      
      const prompt = `
        You are an Agricultural AI Analyst for "FarmLink". 
        Analyze the current marketplace inventory and provide 3 specific market predictions, 2 planting recommendations, and 1 urgent market alert for a farmer in India.
        
        Current Inventory:
        ${MOCK_PRODUCE.map(p => `- ${p.name}: ₹${p.price}/${p.unit}`).join('\n')}
        
        Return the response in JSON format with this structure:
        {
          "predictions": [
            { "crop": "string", "trend": "up" | "down", "percentage": number, "reason": "string" }
          ],
          "recommendations": [
            { "title": "string", "description": "string" }
          ],
          "marketAlerts": ["string"]
        }
        
        Make sure the data is realistic for the Indian agricultural market (e.g., mention monsoon, festivals, or export trends).
      `;

      const response = await ai.models.generateContent({
        model,
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        config: { responseMimeType: "application/json" }
      });

      const data = JSON.parse(response.text || '{}');
      setInsights(data);
    } catch (error) {
      console.error("Farmer AI Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    generateInsights();
  }, []);

  return (
    <div className="bg-white rounded-3xl border border-farm-earth/5 shadow-sm overflow-hidden">
      <div className="px-8 py-6 border-b border-farm-earth/5 flex items-center justify-between bg-farm-green/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-farm-green text-farm-cream rounded-2xl flex items-center justify-center shadow-lg shadow-farm-green/20">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-farm-earth">AI Market Insights</h3>
            <p className="text-[10px] uppercase tracking-widest font-bold text-farm-green">Predictive Analytics</p>
          </div>
        </div>
        <button 
          onClick={generateInsights}
          disabled={isLoading}
          className="p-2 text-farm-earth/40 hover:text-farm-green transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="p-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <Loader2 className="w-8 h-8 animate-spin text-farm-green" />
            <p className="text-sm text-farm-earth/60 font-medium italic">Analyzing market trends and weather patterns...</p>
          </div>
        ) : insights ? (
          <div className="space-y-8">
            {/* Price Predictions */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-farm-earth/40 mb-4 flex items-center gap-2">
                <TrendingUp className="w-3 h-3" /> Price Predictions (Next 30 Days)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {insights.predictions.map((pred, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-2xl bg-farm-cream/50 border border-farm-earth/5"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-sm">{pred.crop}</span>
                      <div className={`flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        pred.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {pred.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {pred.percentage}%
                      </div>
                    </div>
                    <p className="text-[11px] text-farm-earth/60 leading-relaxed">{pred.reason}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recommendations & Alerts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-farm-earth/40 mb-4 flex items-center gap-2">
                  <Sparkles className="w-3 h-3" /> Smart Recommendations
                </h4>
                <div className="space-y-3">
                  {insights.recommendations.map((rec, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-farm-accent mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-farm-earth">{rec.title}</p>
                        <p className="text-xs text-farm-earth/60">{rec.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-farm-earth/40 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-3 h-3" /> Market Alerts
                </h4>
                <div className="space-y-3">
                  {insights.marketAlerts.map((alert, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-orange-50 border border-orange-100 flex gap-3">
                      <AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <p className="text-xs text-orange-800 font-medium">{alert}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-farm-earth/40">No insights available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};
