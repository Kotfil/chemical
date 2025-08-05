import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(english: string, translation: string) {
  return { english, translation };
}

const rows = [
  createData("TNT – Trinitrotoluene", "Nonel tube"),
  createData("RDX – Hexogen", "Detonating Cord"),
  createData("HMX – Octogen", "Electric Detonator"),
  createData("PPAN – Porous prills ammonium nitrate", "Electronic Detonator"),
  createData("CPAN – Chemical pure ammonium nitrate", "Non-electric Detonator"),
  createData("C4 – Plastic explosive", "Toluene Diisocyanate"),
  createData("NC – Nitrocellulose", "Module"),
  createData("SODIUM CYANIDE", "Booster"),
  createData("SODIUM NITRATE", "Sodium Cyanide-1756x2048"),
  createData("SODIUM PERCHLORATE (NaClO₄)", "Emulsion Explosive"),
  createData("AMMONIUM NITRATE", "Water Gel explosive"),
  createData("AMMONIUM PERCHLORATE", "PETN Pentaerythritol tetranitrate"),
  createData("NITRIC ACID", "Chip"),
  createData("MAGNESIUM NITRATE", "Seismic Explosive Cartridges"),
  createData(
    "POTASSIUM NITRATE (KNO₃)",
    "COPPER-CLAD STEEL composite materials",
  ),
  createData(
    "POTASSIUM PERCHLORATE",
    "COLD-ROLLED STEEL CLAD with copper and brass",
  ),
  createData("SODIUM AZIDE", ""),
  createData("UAN", ""),
  createData("PIRIC ACID (TRINITROCRESOL, TNP)", ""),
  createData("Nitroglycerin (C₃H₅N₃O₉)", ""),
];

export default function ProductTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        minWidth: 700,
        fontSize: "clamp(12px, 1.5vw, 18px)",
      }}
    >
      <Table
        size="small"
        sx={{ minWidth: 700, fontSize: "clamp(12px, 1.5vw, 18px)" }}
        aria-label="explosives table"
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Item / Abbreviation</strong>
            </TableCell>
            <TableCell>
              <strong>Translation / Description</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell
                component="th"
                scope="row"
                sx={{ fontSize: "clamp(12px, 1.5vw, 18px)" }}
              >
                {row.english}
              </TableCell>
              <TableCell sx={{ fontSize: "clamp(12px, 1.5vw, 18px)" }}>
                {row.translation}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
