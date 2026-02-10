import { Box, Button, Stack, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import AppleWindow from "./AppleWindow";

type RepoNode = {
  path: string;
  summary: string;
  preview: string[];
};

export default function RepoTreeTerminal({
  heroHeadline,
  heroWords,
  projectTitles,
  phaseNames,
}: {
  heroHeadline: string;
  heroWords: string[];
  projectTitles: string[];
  phaseNames: string[];
}) {
  const nodes = useMemo<RepoNode[]>(
    () => [
      {
        path: "src/sections/Hero.tsx",
        summary: heroHeadline,
        preview: [
          `const headline = "${heroHeadline}"`,
          `const rotating = [${heroWords.slice(0, 3).map((w) => `"${w}"`).join(", ")}]`,
          "export default Hero;",
        ],
      },
      {
        path: "src/sections/Projects.tsx",
        summary: projectTitles[0] ?? "Selected projects",
        preview: [
          `projects = [${projectTitles.slice(0, 3).map((title) => `"${title}"`).join(", ")}]`,
          "openModal(projectIndex)",
          "renderProjectCards()",
        ],
      },
      {
        path: "src/sections/Systems.tsx",
        summary: phaseNames[0] ?? "Delivery system",
        preview: [
          `phases = [${phaseNames.slice(0, 4).join(" -> ")}]`,
          "renderMiniTerminal()",
          "renderPlaybookAccordion()",
        ],
      },
      {
        path: "src/config.ts",
        summary: "Localized portfolio content",
        preview: [
          "export const CONFIG = { en: {...}, de: {...} }",
          "copy drives all sections",
          "single source of truth for text + metadata",
        ],
      },
    ],
    [heroHeadline, heroWords, phaseNames, projectTitles],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const active = nodes[activeIndex];

  return (
    <AppleWindow title="workspace://repo-navigator" subtitle="interactive" minHeight={300}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(220px, 40%) 1fr" }, gap: 1.1 }}>
        <Stack spacing={0.7}>
          {nodes.map((node, idx) => (
            <Button
              key={node.path}
              variant={idx === activeIndex ? "contained" : "outlined"}
              size="small"
              onClick={() => setActiveIndex(idx)}
              sx={{
                justifyContent: "flex-start",
                px: 1.2,
                minHeight: 36,
                borderRadius: 2,
                textAlign: "left",
                fontFamily: "monospace",
              }}
            >
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: 11.5,
                    color: idx === activeIndex ? "#0f1723" : "#9fd8ff",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {node.path}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 11,
                    color: idx === activeIndex ? "rgba(15, 23, 35, 0.76)" : "rgba(196, 216, 245, 0.7)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {node.summary}
                </Typography>
              </Box>
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
          <Typography sx={{ fontFamily: "monospace", fontSize: 12, color: "#a8d7ff", mb: 0.8 }}>
            {active.path}
          </Typography>

          <Stack spacing={0.5}>
            {active.preview.map((line, idx) => (
              <Typography
                key={`${active.path}-${idx}`}
                sx={{
                  fontFamily: "monospace",
                  fontSize: 12,
                  color: "rgba(198, 221, 255, 0.85)",
                }}
              >
                <Box component="span" sx={{ color: "rgba(148, 176, 214, 0.72)", mr: 0.8 }}>
                  {`${idx + 1}`.padStart(2, "0")}
                </Box>
                {line}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Box>
    </AppleWindow>
  );
}
