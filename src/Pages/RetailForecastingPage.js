import "../App.css";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ComparisonBarChart from "../Components/ComparisonBarChart";

const tags = [
  "Python",
  "LightGBM",
  "Time Series Forecasting",
  "Feature Engineering",
  "FastAPI",
  "Power BI",
];

const approachPoints = [
  "Built a weekly, unit-level demand forecasting pipeline covering 27 store locations across 11 product divisions (284 store x division groups) for Club Piscine, a Canadian pool and spa retailer.",
  "Segmented the forecasting problem into three LightGBM models tuned to each segment's volume and distribution: a MAE-loss model for the highest-volume division, a Tweedie-loss model (variance power 1.2) for mid-volume divisions, and a Tweedie-loss model (variance power 1.5) for the remaining eight lower-volume divisions.",
  "Engineered features including weather data (integrated via the Open-Meteo API) and division x season interaction terms, then evaluated each feature's effect per division rather than assuming a uniform benefit; interactions that hurt sparse divisions were routed to a historical-mean baseline instead.",
  "Validated with walk-forward cross-validation across 6 seasonal folds to reflect how the model would actually be used, and produced P5/P95 prediction intervals alongside point forecasts so the business could see uncertainty, not just a single number.",
  "Moved the pipeline from manual SharePoint CSV exports to a direct FastAPI connection feeding Power BI, so forecasts could refresh without a manual hand-off step.",
];

const resultsData = [
  { label: "Baseline", value: 20.8, color: "#7ec8e3" },
  { label: "Final Model", value: 18.6, color: "#53b374" },
];

const errorGroupsData = [
  { label: "Before", value: 166, color: "#7ec8e3" },
  { label: "After", value: 38, color: "#53b374" },
];

const resultBullets = [
  "Reduced weighted MAPE from a 20.8% baseline to 18.6% across all 284 store x division groups.",
  "Cut the number of high-error groups (forecasts the business couldn't yet trust) from 166 down to 38.",
  "Achieved an R² of 0.944 on held-out folds.",
  "Delivered forecasts with P5/P95 prediction intervals, giving the business a usable uncertainty range instead of a single point estimate.",
];

function RetailForecastingPage(props) {
  const navigate = useNavigate();

  useEffect(() => {
    props.scrollToTop();
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", pt: "80px", pb: 6, px: { xs: 2, md: 6 } }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/")}
        sx={{ color: "rgba(255,255,255,0.6)", textTransform: "none", mb: 3, "&:hover": { color: "white" } }}
      >
        Back to home
      </Button>

      <TypeAnimation
        sequence={["Retail Demand Forecasting."]}
        wrapper="h1"
        speed={50}
        style={{ fontSize: props.isMobile ? "2em" : "3em", display: "block", margin: "0 0 8px" }}
      />

      <Typography variant="subtitle1" sx={{ color: "#53b374", fontWeight: 600, mb: 3 }}>
        Modeler &middot; MMA Capstone for Club Piscine &middot; McGill University
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 4 }}>
        {tags.map((t) => (
          <Chip
            key={t}
            label={t}
            sx={{ backgroundColor: "#0d2a1f", color: "#53b374", border: "1px solid #53b37455", fontWeight: 600 }}
          />
        ))}
      </Box>

      <Box sx={{ maxWidth: 720, margin: "0 auto", textAlign: "left" }}>
        <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", mb: 4, lineHeight: 1.8 }}>
          Club Piscine needed a reliable way to forecast weekly unit demand at the
          store and product-division level to support inventory and purchasing
          decisions. As the Modeler on this use case, I owned the forecasting
          model architecture, from segmentation strategy through validation.
        </Typography>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Typography variant="h6" sx={{ color: "white", fontWeight: 700, mb: 2 }}>
            Approach
          </Typography>
          <Box component="ul" sx={{ pl: 2, mb: 4 }}>
            {approachPoints.map((b, i) => (
              <Typography
                component="li"
                key={i}
                variant="body1"
                sx={{ color: "rgba(255,255,255,0.75)", mb: 1.5, lineHeight: 1.8 }}
              >
                {b}
              </Typography>
            ))}
          </Box>
        </motion.div>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 4 }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <Typography variant="h6" sx={{ color: "white", fontWeight: 700, mb: 3, textAlign: "center" }}>
            Results
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: props.isMobile ? "column" : "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              mb: 4,
            }}
          >
            <ComparisonBarChart
              title="Weighted MAPE"
              unit="%"
              data={resultsData}
            />
            <ComparisonBarChart
              title="High-Error Groups (of 284)"
              unit=""
              data={errorGroupsData}
            />
          </Box>

          <Box component="ul" sx={{ pl: 2 }}>
            {resultBullets.map((b, i) => (
              <Typography
                component="li"
                key={i}
                variant="body1"
                sx={{ color: "rgba(255,255,255,0.75)", mb: 1.5, lineHeight: 1.8 }}
              >
                {b}
              </Typography>
            ))}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}

export default RetailForecastingPage;
