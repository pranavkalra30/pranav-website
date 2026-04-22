import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const jobs = [
  {
    title: "Short-term Rental Property Manager",
    company: "Self-Employed (Freelance)",
    location: "Toronto, ON",
    period: "Feb 2022 – Present",
    color: "#1a3a2a",
    accent: "#53b374",
    bullets: [
      "Conducted extensive market trend analysis to optimize local pricing strategies.",
      "Leveraged deep knowledge of Toronto's geography and business trends to increase listing visibility.",
    ],
    tags: ["Market Research", "Analytics", "SEO"],
  },
  {
    title: "Software Developer",
    company: "Xpressphone",
    location: "Toronto, ON",
    period: "Mar 2020 – Apr 2022",
    color: "#0d2a45",
    accent: "#4da6e8",
    bullets: [
      "Designed and deployed full-stack applications using ReactJS, Node.js, and Azure/AWS.",
      "Developed and optimized API-driven backend services to enhance reliability and performance.",
      "Migrated legacy systems to Azure cloud, reducing latency and improving efficiency by 30%.",
      "Collaborated with designers and stakeholders to ensure consistent UX and accessibility compliance.",
    ],
    tags: ["ReactJS", "Node.js", "Azure", "AWS", "REST APIs"],
  },
  {
    title: "Frontend Developer",
    company: "Tata Consultancy Services",
    location: "Toronto, ON",
    period: "Oct 2018 – Nov 2021",
    color: "#2a1a0d",
    accent: "#e8934d",
    bullets: [
      "Built and maintained secure financial web and mobile applications using ReactJS and TypeScript.",
      "Developed reusable components and implemented responsive design aligned with accessibility standards.",
      "Partnered with backend and DevOps teams to ensure scalable integrations with cloud-based APIs.",
      "Improved UI rendering and load performance through efficient state management and profiling tools.",
    ],
    tags: ["ReactJS", "TypeScript", "Accessibility", "Mobile", "DevOps"],
  },
];

const JobCard = ({ job, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{ width: "100%" }}
    >
      <Card
        onClick={() => setExpanded((e) => !e)}
        sx={{
          backgroundColor: job.color,
          border: `1px solid ${job.accent}33`,
          borderLeft: `4px solid ${job.accent}`,
          borderRadius: "16px",
          cursor: "pointer",
          transition: "box-shadow 0.2s, transform 0.2s",
          "&:hover": {
            boxShadow: `0 4px 24px ${job.accent}33`,
            transform: "translateY(-2px)",
          },
          mb: 2,
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ color: "white", fontWeight: 700, lineHeight: 1.3 }}
              >
                {job.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: job.accent, fontWeight: 600 }}
              >
                {job.company}
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.45)", mt: 0.3 }}>
                {job.location}
              </Typography>
            </Box>
            <Chip
              label={job.period}
              size="small"
              sx={{
                backgroundColor: `${job.accent}22`,
                color: job.accent,
                fontWeight: 600,
                border: `1px solid ${job.accent}55`,
              }}
            />
          </Box>

          {/* Expandable bullets */}
          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <Box component="ul" sx={{ pl: 2, mt: 2, mb: 1 }}>
              {job.bullets.map((b, i) => (
                <Typography
                  component="li"
                  key={i}
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.75)", mb: 0.8, lineHeight: 1.7 }}
                >
                  {b}
                </Typography>
              ))}
            </Box>
          </motion.div>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mt: expanded ? 1 : 2 }}>
            {job.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "11px",
                }}
              />
            ))}
          </Box>

          <Typography
            variant="caption"
            sx={{ color: "rgba(255,255,255,0.25)", mt: 1, display: "block" }}
          >
            {expanded ? "▲ Show less" : "▼ Show details"}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const WorkExperience = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Box
        sx={{
          backgroundColor: "#151619",
          borderRadius: "20px",
          padding: "20px 30px 40px",
        }}
      >
        <TypeAnimation
          sequence={["Work experience."]}
          wrapper="span"
          speed={50}
          cursor={false}
          style={{ fontSize: "2em", display: "inline-block" }}
        />

        <Box
          sx={{
            maxWidth: 780,
            margin: "24px auto 0",
          }}
        >
          {jobs.map((job, i) => (
            <JobCard key={job.company} job={job} index={i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WorkExperience;
