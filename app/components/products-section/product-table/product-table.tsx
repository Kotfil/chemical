import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getLocaleDict } from '@/app/i18n-service';

export default async function ProductTable() {
  const { dict } = await getLocaleDict();
  const rows = dict.product_section.product_table as { text: string }[];

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: '100%',
        maxWidth: '100%',
        fontSize: 'clamp(12px, 1.5vw, 18px)',
      }}
    >
      <Table
        size="small"
        sx={{
          width: '100%',
          tableLayout: 'auto',
          fontSize: 'clamp(12px, 1.5vw, 18px)',
        }}
        aria-label="explosives table"
      >
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={{ fontSize: 'clamp(12px, 1.5vw, 18px)' }}>{row.text}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
