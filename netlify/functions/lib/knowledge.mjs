// The ONLY facts the chatbot may use. Edit these strings to update what it knows.
// Rule: if it is not true and provable, it does not go in here.

export const CAREER = `
ABOUT PRANAV KALRA
- Toronto-based analytics and software professional. Completed the Master of Management in Analytics (MMA) at McGill University in September 2026. Holds a Bachelor of Electrical Engineering from Toronto Metropolitan University (2013 to 2017, Dean's List, graduated with distinction).
- Looking for entry-level roles in data science, data engineering, machine learning, analytics or software development.

WORK EXPERIENCE
1) Data Science Consultant, MMA Capstone Project, Club Piscine (Sept 2025 to June 2026, remote, Toronto).
   - Built the client's first weekly demand forecasting system for a Quebec and Ontario pool and spa retailer, using Python, SQL and LightGBM.
   - Covered 27 stores and 11 product divisions (284 store-division series).
   - Served forecasts through a FastAPI endpoint into Power BI, replacing manual CSV exports.
   - Presented results and demos to client stakeholders.
2) Independent Property Portfolio Manager, self-employed (Feb 2022 to present, Toronto).
   - Runs a short-term rental business, using market trend analysis to optimize pricing and listing visibility.
3) Software Developer, Xpressphone (Mar 2020 to Apr 2022, Toronto).
   - Built the frontend of the company website in ReactJS and helped deploy it.
4) Software Developer, Tata Consultancy Services (Oct 2018 to Nov 2021, Toronto).
   - Built secure financial web and mobile applications with ReactJS and TypeScript.
   - Worked with backend teams on API integrations in an Agile/Scrum team using JIRA.
5) Customer Service Agent, Air Canada (summer 2018, Toronto Pearson Airport): helped passengers with check-in and rebooking.

EDUCATION
- Master of Management in Analytics, McGill University (Jan 2025 to Sept 2026). $10,000 Entrance Scholarship. Courses included Time Series Forecasting, Building Agentic AI Systems, LLM/GenAI and network analytics.
- Bachelor of Electrical Engineering, Toronto Metropolitan University (Sept 2013 to Aug 2017). Dean's List.

SKILLS (things Pranav has actually used)
- Languages and data: Python (Pandas, NumPy), SQL (joins, aggregation, window functions), JavaScript, TypeScript.
- ML: LightGBM, XGBoost, scikit-learn, PyTorch (graph neural networks), time series forecasting, walk-forward validation.
- LLMs and agents: OpenAI Agents SDK, OpenAI Responses API with file search, tool calling, multi-agent workflows. Uses Claude Code daily.
- Engineering and BI: ReactJS, FastAPI, REST APIs, Git, Netlify, Power BI, Tableau, Excel, JIRA, Agile/Scrum.

NOT in Pranav's hands-on experience (do not claim): Azure, AWS, Google Cloud, Snowflake, Informatica, Spark, Kubernetes, TensorFlow, Airflow, dbt.
`;

export const PROJECTS = `
PROJECTS

1) Retail demand forecasting (MMA capstone, Club Piscine)
- Weekly unit-level forecasts for 27 stores and 11 divisions (284 series).
- Split the problem into three LightGBM models by sales volume: an MAE-loss model for the highest-volume division, a Tweedie-loss model (variance power 1.2) for mid-volume divisions, and a Tweedie-loss model (variance power 1.5) for the eight low-volume divisions.
- Features: seasonality (Fourier terms), calendar and holiday effects, lag and rolling sales features, and weather from the Open-Meteo API.
- Validation: held out the last 26 weeks, plus walk-forward cross-validation. Weighted MAPE of 18.6% and R-squared of 0.944 on the holdout, compared with about 50% for seasonal naive and 48% for a 4-week moving average, and 21% for a single global XGBoost model.
- Produced P5/P95 prediction intervals. Forecasts are served through a FastAPI endpoint that Power BI reads.
- Page on the site: /projects/retail-demand-forecasting

2) ShopNova multi-agent customer service system (McGill, Building Agentic AI Systems)
- Built with the OpenAI Agents SDK: a support agent, an operations agent that handles escalations, and a rule-based quality agent.
- Hardest part: escalations stalled because the model sometimes replied in text instead of calling the handoff tool. Fixed by forcing tool use with tool_choice="required" and correcting how the agents were run.
- Tested with conversations and trace inspection. Pranav has not built a formal evaluation set for it.

3) Document question-answering agent (McGill, LLM/GenAI)
- Built with the OpenAI Responses API and the file_search tool.

4) Network analysis of r/Baystreetbets (McGill, INSY 670)
- Applied PageRank, graph neural networks (in PyTorch) and community detection to a Reddit social network to find influential members and discussion structure.

5) G7 inflation forecasting (McGill, group project)
- Forecast CPI across G7 economies, comparing classical and modern time series methods.

6) Stock-return prediction (McGill, FINE 695, group project)
- Machine learning models to predict stock returns for a long-only small and mid-cap strategy.

7) ModoMubi (personal project)
- Movie and show discovery web app that pulls from a live third-party API. Pranav designed the UI and search flow from scratch with responsive, accessible layouts.
- Page on the site: /projects/modomubi

8) Xpressphone website (work project)
- Frontend of the company website, built in ReactJS.
- Page on the site: /projects/xpressphone

9) This website and chatbot
- pranavkalra.ca is a React and MUI site deployed on Netlify. The chatbot is itself a small multi-agent system built with the OpenAI Agents SDK: a guardrail agent, a router agent and three specialist agents, answering only from a fixed knowledge base.
`;

export const CONTACT = `
HOW TO CONTACT PRANAV
- Use the contact form on this website (scroll to the contact section or use the contact button).
- LinkedIn: https://www.linkedin.com/in/pranav00100/
- GitHub: https://github.com/pranavkalra30
- Do NOT give out any email address, phone number or home address. Say Pranav prefers the contact form or LinkedIn.

AVAILABILITY
- Pranav is looking for full-time, entry-level roles in data, machine learning, analytics or software development, based in Toronto.
- For questions about salary, start date, work authorization or other personal details, say those are best discussed directly with Pranav and point to the contact form or LinkedIn.
`;
