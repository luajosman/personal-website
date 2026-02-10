import { Box, Button, Checkbox, Stack, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import AppleWindow from "./AppleWindow";

type Phase = {
  name: string;
  summary: string;
  tag: string;
};

type PlaybookItem = {
  title: string;
  text: string;
  tags: string[];
};

export default function PipelineMatrixTerminal({
  phases,
  playbookItems,
}: {
  phases: Phase[];
  playbookItems: PlaybookItem[];
}) {
  const [activePhase, setActivePhase] = useState(0);
  const [checks, setChecks] = useState<boolean[]>(() => playbookItems.map(() => false));

  const metrics = useMemo(() => {
    const level = activePhase + 1;
    return [
      { label: "Velocity", value: Math.min(48 + level * 11, 95) },
      { label: "Quality", value: Math.min(54 + level * 10, 96) },
      { label: "Reliability", value: Math.min(58 + level * 9, 97) },
    ];
  }, [activePhase]);

  const toggleCheck = (idx: number) => {
    setChecks((prev) => prev.map((entry, i) => (i === idx ? !entry : entry)));
  };

  const phase = phases[activePhase];

  return (
    <AppleWindow title="pipeline://release-matrix" subtitle="interactive" minHeight={320}>
      <Stack spacing={1.2}>
        <Stack direction="row" flexWrap="wrap" gap={0.7}>
          {phases.map((item, idx) => (
            <Button
              key={item.tag}
              size="small"
              variant={idx === activePhase ? "contained" : "outlined"}
              onClick={() => setActivePhase(idx)}
              sx={{ minHeight: 33, px: 1.3, fontFamily: "monospace", fontSize: 11.5 }}
            >
              {item.tag}
            </Button>
          ))}
        </Stack>

        <Box
          sx={{
            p: 1.1,
            borderRadius: 2.5,
            border: "1px solid rgba(177, 207, 248, 0.18)",
            background: "rgba(9, 14, 23, 0.72)",
          }}
        >
          <Typography sx={{ fontFamily: "monospace", color: "#9fd8ff", mb: 0.4 }}>
            {phase?.name}
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 1.1, fontSize: 13 }}>
            {phase?.summary}
          </Typography>

          <Stack spacing={0.8}>
            {metrics.map((metric) => (
              <Box key={metric.label}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.35 }}>
                  <Typography sx={{ fontSize: 12.5, color: "#cfe2ff" }}>{metric.label}</Typography>
                  <Typography sx={{ fontSize: 12.5, fontFamily: "monospace", color: "#ffd88a" }}>
                    {metric.value}%
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: 8,
                    borderRadius: 999,
                    bgcolor: "rgba(145, 171, 205, 0.24)",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      width: `${metric.value}%`,
                      height: "100%",
                      borderRadius: 999,
                      background:
                        "linear-gradient(90deg, rgba(127,210,255,0.9), rgba(244,181,74,0.9))",
                      transition: "width 260ms ease",
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            p: 1.1,
            borderRadius: 2.5,
            border: "1px solid rgba(177, 207, 248, 0.18)",
            background: "rgba(9, 14, 23, 0.72)",
          }}
        >
          <Typography sx={{ fontFamily: "monospace", color: "#9fd8ff", mb: 0.6 }}>
            readiness-checklist
          </Typography>

          <Stack spacing={0.2}>
            {playbookItems.slice(0, 3).map((item, idx) => (
              <Button
                key={item.title}
                onClick={() => toggleCheck(idx)}
                sx={{
                  px: 0.4,
                  py: 0.2,
                  minHeight: 34,
                  justifyContent: "flex-start",
                  borderRadius: 2,
                  textAlign: "left",
                }}
              >
                <Checkbox checked={checks[idx] ?? false} size="small" sx={{ p: 0.6, mr: 0.4 }} />
                <Typography sx={{ fontSize: 12.5, color: "#cfe2ff" }}>{item.title}</Typography>
              </Button>
            ))}
          </Stack>
        </Box>
      </Stack>
    </AppleWindow>
  );
}
