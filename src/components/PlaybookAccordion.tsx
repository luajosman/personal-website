import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Chip, Stack, Typography } from "@mui/material";
import { useState } from "react";

type PlaybookItem = {
  title: string;
  text: string;
  tags: string[];
};

export default function PlaybookAccordion({ items }: { items: PlaybookItem[] }) {
  const [expanded, setExpanded] = useState(0);

  return (
    <Stack spacing={1}>
      {items.map((item, idx) => (
        <Accordion
          key={item.title}
          expanded={expanded === idx}
          onChange={(_, isExpanded) => setExpanded(isExpanded ? idx : -1)}
          disableGutters
          sx={{
            borderRadius: "14px !important",
            background: "linear-gradient(160deg, rgba(14,24,38,0.9), rgba(9,15,24,0.95))",
            border: "1px solid rgba(193, 218, 255, 0.16)",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 700 }}>{item.title}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography color="text.secondary" sx={{ mb: 1.1 }}>
              {item.text}
            </Typography>

            <Stack direction="row" gap={0.7} flexWrap="wrap">
              {item.tags.map((tag) => (
                <Chip key={tag} label={tag} size="small" variant="outlined" />
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
}
