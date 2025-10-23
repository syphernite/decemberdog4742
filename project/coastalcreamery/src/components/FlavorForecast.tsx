import { useState, useEffect } from 'react';
import { Sun, Cloud, Sparkles, LucideProps, Loader2 } from 'lucide-react';

// The URL you copied from "Publish to web" in Google Sheets
const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTiILY_qFThxRTELPdgfnBv19mrnuq8H05fWZVtqr_BTTbR4Ej5OYZti0AjVebUyojhjhA8jeX9rnfI/pub?gid=0&single=true&output=csv';

// Map string names from your sheet to the actual icon components
const iconMap: { [key: string]: React.FC<LucideProps> } = {
  Sun,
  Cloud,
  Sparkles,
};

interface Forecast {
  weather: string;
  icon: React.FC<LucideProps>;
  special: string;
}

export default function FlavorForecast() {
  const [currentForecast, setCurrentForecast] = useState<Forecast | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const fetchForecasts = async () => {
      try {
        const response = await fetch(GOOGLE_SHEET_CSV_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const text = await response.text();
        const rows = text.trim().split('\n').map(r => r.split(','));
        const headers = rows[0].map(h => h.trim().toLowerCase());
        const data = rows.slice(1).map(row => Object.fromEntries(row.map((val, i) => [headers[i], val.trim()])));

        const activeForecasts = data.filter((row: any) => row.active?.trim().toLowerCase() === 'y');

        if (activeForecasts.length === 0) {
          // If no 'y' is found, or sheet is empty, we have no forecast to show.
          setCurrentForecast(null); // Explicitly set to null
        } else {
          const forecastsFromSheet: Forecast[] = activeForecasts
          .map((row: any) => ({
            weather: row.weather || '',
            icon: iconMap[row.icon] || Sun, // Default to Sun icon
            special: row.special || '',
          }))
          .filter(f => f.weather && f.special); // Ensure rows have data
          const randomForecast = forecastsFromSheet[Math.floor(Math.random() * forecastsFromSheet.length)];
          setCurrentForecast(randomForecast);
        }
      } catch (err) {
        setError('Could not load the flavor forecast. Please try again later.');
        console.error('Error fetching or parsing CSV:', err);
      }
      setLoading(false);
    };

    fetchForecasts();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-300 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display drop-shadow-lg">
          Today's Flavor Forecast
        </h2>

        <div
          className={`bg-white/90 backdrop-blur rounded-3xl p-8 md:p-12 shadow-2xl transform transition-all duration-300 min-h-[300px] flex flex-col justify-center ${
            isActive ? 'scale-105 shadow-cyan-400/50' : 'hover:scale-105'
          }`}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          {loading && (
            <div className="flex flex-col items-center justify-center gap-4">
              <Loader2 className="w-16 h-16 text-cyan-500 animate-spin" />
              <p className="text-xl text-cyan-700">Forecasting the flavor...</p>
            </div>
          )}
          {error && <p className="text-xl text-red-500">{error}</p>}
          {!loading && !error && currentForecast && (
            <>
              <div className="flex items-center justify-center gap-6 mb-6">
                <currentForecast.icon className="w-16 h-16 text-yellow-500 animate-pulse" />
                <p className="text-3xl md:text-4xl font-bold text-cyan-800">
                  {currentForecast.weather}
                </p>
              </div>

              <div className="border-t-2 border-cyan-200 pt-6 mt-6">
                <p className="text-xl text-cyan-600 mb-3 font-semibold">Special of the Day:</p>
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                  {currentForecast.special}
                </p>
              </div>
            </>
          )}
        </div>

        <div className="mt-8 inline-block bg-white/60 backdrop-blur rounded-2xl px-6 py-3 shadow-lg">
          <p className="text-cyan-800 font-medium italic">
            Catch the flavor wave before it melts!
          </p>
        </div>
      </div>
    </section>
  );
}
