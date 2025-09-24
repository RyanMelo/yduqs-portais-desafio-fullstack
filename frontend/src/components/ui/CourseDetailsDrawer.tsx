'use client';

import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Typography,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Radio,
  RadioGroup,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from '@mui/material';
import {
  Close as CloseIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import { Course } from "@/types/Courses";

interface CourseDetailsDrawerProps {
  open: boolean;
  onClose: () => void;
  paymentOptions?: Course['pricesTable'];
}

export default function CourseDetailsDrawer({
  open,
  onClose,
  paymentOptions,
}: CourseDetailsDrawerProps) {
  const theme = useTheme();
  const [selectedPayment, setSelectedPayment] = useState('');

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.value);
  };

  const handleClose = () => {
    onClose();
    setSelectedPayment('');
  }

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleClose}
      ModalProps={{
        BackdropProps: {
          sx: {backgroundColor: 'rgba(0, 0, 0, 0.27)'}
        }
      }}
      PaperProps={{
        sx: {
          maxWidth: '100%',
          boxShadow: '0px 6px 30px 5px rgba(0, 0, 0, 0.12), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 8px 10px -5px rgba(0, 0, 0, 0.2)',
        }
      }}
    >
      <Box
        sx={{
          width: 600,
          maxWidth: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '24px 16px 24px 32px',
            borderBottom: `1px solid ${theme.palette.divider}`,
            gap: 1,

            [theme.breakpoints.down('md')]: {
              padding: '20px 16px 20px 16px',
            }
          })}
        >
          <Typography
            variant="h5"
            sx={(theme) => ({
              fontWeight: 500,
              fontSize: 32,
              lineHeight: '1.2em',
              color: theme.palette.text.primary,
              flex: 1,

              [theme.breakpoints.down('md')]: {
                size: '24px'
              }
            })}
          >
            Mais detalhes
          </Typography>

          <IconButton
            onClick={onClose}
            sx={(theme) => ({
              width: 48,
              height: 48,
              backgroundColor: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#F5F5F5',
              },

              [theme.breakpoints.down('md')]: {
                width: 40,
                height: 40,
              }
            })}
          >
            <CloseIcon sx={{fontSize: 24, color: '#121212'}}/>
          </IconButton>
        </Box>

        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          {paymentOptions && (
            <Box
              sx={(theme) => ({
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'stretch',
                padding: '0px 32px',

                [theme.breakpoints.down('md')]: {
                  padding: '0px 16px',
                }
              })}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'stretch',
                  padding: '24px 0px 16px',
                  borderBottom: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: '1.35em',
                    color: theme.palette.text.primary,
                  }}
                >
                  Qual dessas opções de parcelas você prefere?
                </Typography>
              </Box>

              <TableContainer
                component={Box}
                sx={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: 'none',
                }}
              >
                <Table
                  sx={{
                    border: `1px solid ${theme.palette.primary.main}`,
                    borderRadius: '8px'
                  }}
                >
                  <TableHead
                    sx={{
                      backgroundColor: '#144BC8',
                      '& .MuiTableCell-head': {
                        color: '#FFFFFF',
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: 16,
                        lineHeight: '1.71em',
                        border: `1px solid ${theme.palette.primary.main}`,
                      },
                    }}
                  >
                    <TableRow>
                      <TableCell
                        align="left"
                        sx={(theme) => ({
                          backgroundColor: '#144BC8 !important',
                          color: 'background.main !important',
                          opacity: '1 !important',
                          fontWeight: 400,
                          width: '80%',

                          [theme.breakpoints.down('md')]: {
                            width: '65%',
                          }

                        })}
                      >
                        Parcelas
                      </TableCell>

                      <TableCell
                        align="left"
                        sx={{
                          backgroundColor: '#144BC8 !important',
                          color: '#FFFFFF !important',
                          opacity: '1 !important',
                          fontWeight: 400,
                        }}
                      >
                        Total
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody sx={{border: `1px solid ${theme.palette.primary.main}`}}>
                    {paymentOptions.map((option) => (
                      <TableRow
                        key={option.installments}
                        sx={{
                          borderBottom: `1px solid ${theme.palette.primary.main}`
                        }}
                      >
                        <TableCell
                          key={option.installments}
                          align="left"
                          sx={(theme) => ({
                            padding: '8px !important',
                            border: 'none',
                            width: '80%',

                            [theme.breakpoints.down('md')]: {
                              width: '65%',
                            }
                          })}
                        >
                          <Box sx={{display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'start'}}>
                            <RadioGroup
                              value={selectedPayment}
                              onChange={handlePaymentChange}
                              sx={{margin: 0}}
                            >
                              <FormControlLabel
                                value={option.installments.toString()}
                                control={<Radio
                                  size="medium"
                                  sx={{
                                    color: theme.palette.text.primary,
                                    '&.Mui-checked': {
                                      color: theme.palette.text.primary,
                                      '& .MuiSvgIcon-root': {
                                        fontSize: 20,
                                      },
                                    },
                                    '& .MuiSvgIcon-root': {
                                      fontSize: 20,
                                    },
                                  }}
                                />}
                                label={`${option.installments}x R$ ${option.amount.toFixed(2).replace('.', ',')}`}
                                sx={{
                                  margin: 0,
                                  '& .MuiFormControlLabel-label': {
                                    fontWeight: 500,
                                    fontSize: 14,
                                    lineHeight: '1.17em',
                                    color: theme.palette.text.primary,
                                  },
                                }}
                              />
                            </RadioGroup>
                          </Box>
                        </TableCell>
                        <TableCell key={option.total} align="left" sx={{padding: '8px !important', border: 'none'}}>
                          <Typography
                            sx={{
                              fontSize: 14,
                              fontWeight: 400,
                              color: theme.palette.text.secondary
                            }}
                          >
                            R$ {option.total.toFixed(2).replace('.', ',')}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}

          <Box
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'stretch',
              gap: 2,
              padding: '32px',

              [theme.breakpoints.down('md')]: {
                padding: '16px',
              }
            })}
          >
            <Accordion
              sx={(theme) => ({
                border: '1px solid #E0E0E0',
                borderRadius: '8px !important',
                boxShadow: 'none',
                '&:before': {
                  display: 'none',
                },
                '& .MuiAccordionSummary-root': {
                  padding: '24px',
                  [theme.breakpoints.down('md')]: {
                    padding: '16px',
                  },
                  '& .MuiAccordionSummary-content': {
                    margin: 0,
                    alignItems: 'center',
                  },
                },
                '& .MuiAccordionDetails-root': {
                  padding: '0px 24px 24px 24px',
                },
              })}
            >
              <AccordionSummary expandIcon={<AddIcon sx={{color: theme.palette.text.primary}}/>}>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: '1.15em',
                    color: theme.palette.text.primary,
                  }}
                >
                  Sobre a Bolsa Incentivo
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: '1.5em',
                    color: theme.palette.text.primary,
                  }}
                >
                  Informações detalhadas sobre a Bolsa Incentivo serão exibidas aqui.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: '8px !important',
                boxShadow: 'none',
                '&:before': {
                  display: 'none',
                },
                '& .MuiAccordionSummary-root': {
                  padding: '24px',
                  [theme.breakpoints.down('md')]: {
                    padding: '16px',
                  },
                  '& .MuiAccordionSummary-content': {
                    margin: 0,
                    alignItems: 'center',
                  },
                },
                '& .MuiAccordionDetails-root': {
                  padding: '0px 24px 24px 24px',
                  [theme.breakpoints.down('md')]: {
                    padding: '0px 16px 16px 16px',
                  },
                },
              }}
            >
              <AccordionSummary expandIcon={<AddIcon sx={{color: theme.palette.text.primary}}/>}>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: '1.15em',
                    color: theme.palette.text.primary,
                  }}
                >
                  Resumo das suas escolhas
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: '1.5em',
                    color: theme.palette.text.primary,
                  }}
                >
                  Detalhes sobre as escolhas do curso serão exibidos aqui.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>

        <Box
          sx={(theme) => ({
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 1,
            padding: '24px 32px',
            backgroundColor: theme.palette.background.default,
            boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.12)',
            zIndex: 10,

            [theme.breakpoints.down('md')]: {
              padding: '24px 16px',
            }
          })}
        >
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: 16,
              lineHeight: '1em',
              textTransform: 'none',
              borderRadius: 2,
              padding: '16px 24px',
              boxShadow: 'none',
              '&:hover': {
                boxShadow: 'none',
              },
            }}
          >
            Avançar
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}