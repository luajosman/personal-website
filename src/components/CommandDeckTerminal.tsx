import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import AppleWindow from "./AppleWindow";

type Command = {
  label: string;
  cmd: string;
  output: string;
};

const MAX_LINES = 8;

export default function CommandDeckTerminal({ lines }: { lines: string[] }) {
  const commands = useMemo<Command[]>(
    () => [
      {
        label: "Build",
        cmd: "pnpm build",
        output: lines[0] ?? "Build completed successfully.",
      },
      {
        label: "Motion sync",
        cmd: "pnpm run tokens:sync",
        output: lines[1] ?? "Motion tokens synchronized across sections.",
      },
      {
        label: "QA check",
        cmd: "pnpm run qa:responsive",
        output: lines[2] ?? "Responsive verification passed.",
      },
      {
        label: "Release",
        cmd: "pnpm run deploy:prod",
        output: lines[3] ?? "Production bundle deployed.",
      },
    ],
    [lines],
  );

  const [history, setHistory] = useState<string[]>([
    "> terminal initialized",
    "> choose a command and run it",
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const run = (idx: number) => {
    setActiveIndex(idx);
    const selected = commands[idx];
    setHistory((prev) => [...prev, `$ ${selected.cmd}`, `> ${selected.output}`].slice(-MAX_LINES));
  };

  const reset = () => {
    setHistory(["> terminal initialized", "> choose a command and run it"]);
  };

  return (
    <AppleWindow title="session://command-deck" subtitle="interactive" minHeight={300}>
      <Stack spacing={1.2}>
        <Stack direction="row" flexWrap="wrap" gap={0.8}>
          {commands.map((item, idx) => (
            <Button
              key={item.cmd}
              size="small"
              variant={idx === activeIndex ? "contained" : "outlined"}
              onClick={() => setActiveIndex(idx)}
              sx={{ minHeight: 34, px: 1.4, fontFamily: "monospace", fontSize: 12 }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>

        <Stack direction="row" spacing={0.9}>
          <Button
            size="small"
            variant="contained"
            startIcon={<PlayArrowRoundedIcon />}
            onClick={() => run(activeIndex)}
            sx={{ minHeight: 34, px: 1.5, fontFamily: "monospace", fontSize: 12 }}
          >
            Run
          </Button>
          <Button
            size="small"
            variant="outlined"
            startIcon={<RestartAltRoundedIcon />}
            onClick={reset}
            sx={{ minHeight: 34, px: 1.5, fontFamily: "monospace", fontSize: 12 }}
          >
            Reset
          </Button>
        </Stack>

        <Box
          sx={{
            p: 1.2,
            borderRadius: 2.5,
            border: "1px solid rgba(177, 207, 248, 0.18)",
            background: "rgba(9, 14, 23, 0.72)",
            minHeight: 168,
          }}
        >
          <Stack spacing={0.5}>
            {history.map((line, idx) => (
              <Typography
                key={`${line}-${idx}`}
                sx={{
                  fontFamily: "monospace",
                  fontSize: 12.5,
                  color: line.startsWith("$") ? "#ffd88a" : "#b8d4ff",
                }}
              >
                {line}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Stack>
    </AppleWindow>
  );
}
