'use client';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTranslation } from '@/app/components/i18n/I18n-context';
import { useEffect, useState } from 'react';

export default function ProductTable() {
  const [rows, setRows] = useState<{ text: string }[]>([]);
  const t = useTranslation() as any;
  console.log('t.product_section.product_table', t.product_section.product_table);
  useEffect(() => {
    let mounted = true;
    const loadDict = async () => {
      if (mounted) {
        setRows(t.product_section.product_table as { text: string }[]);
      }
    };
    console.log('ww');
    loadDict();
    return () => {
      mounted = false;
    };
  }, [t]);
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
              <TableCell align="center" sx={{ fontSize: 'clamp(12px, 1.5vw, 18px)' }}>
                {row.text}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
