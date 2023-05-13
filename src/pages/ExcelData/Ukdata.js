import React from 'react';
// Import Components
import { Row, Col } from "react-bootstrap";
//Import Data Table
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { Button } from "react-bootstrap";
import axios from 'axios'
import {API_BASE_URL,ACCESS_TOKEN,BASE_URL,BASE_URLS} from '../../../SocialLink';
import {Link} from 'react-router-dom';

const data=[
 {
   "subject": "Master of Science [M.S] Advanced Computer Science",
   "duration": "1 year",
   "money": "INR 30.6 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": "Application Deadline: 07 Jan, 2023",
   "Accommodation expenses": "7189 Pound",
   "Property": "Bright 2 Bedroom Garden Apartment in Edward",
   "Description": "2 Bed |1 Bath",
   "Cost (INR)": "0.33 lakhs/ week"
 },
 {
   "subject": "Master of Business Administration [M.B.A]",
   "duration": "1 year",
   "money": "INR 66.2 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66|GMAT650",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "Central Oxford Romantic Riverside",
   "Description": "1 Bed | 1 Bath",
   "Cost (INR)": "0.66 lakhs/ week"
 },
 {
   "subject": "Master of Science [M.S] Financial Economics",
   "duration": "9 months",
   "money": "INR 49.2 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "Comfortable London Flat to Rent",
   "Description": "2 Bed |1 Bath",
   "Cost (INR)": "0.52 lakhs/ week"
 },
 {
   "subject": "Master of Science [M.S] Social Data Science",
   "duration": "10 months",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": "Application Deadline: 07 Jan, 2023",
   "Accommodation expenses": "",
   "Property": "Fabulous Rooms",
   "Description": "3 Bed | 2 Bath",
   "Cost (INR)": "0.74 lakhs/ month"
 },
 {
   "subject": "Bachelor of Medicine and Surgery [M.B.B.S]",
   "duration": "6 years",
   "money": "INR 37.2 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "Mary Poppins Penthouse",
   "Description": "1 Bed | 1 Bath",
   "Cost (INR)": "0.41 lakhs/ week"
 },
 {
   "subject": "Bachelor of Arts [B.A] Computer Science",
   "duration": "3 years",
   "money": "INR 39.4 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Law and Finance",
   "duration": "10 months",
   "money": "INR 42.5 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": "Application Deadline: 21 Jan, 2023",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Engineering [M.Eng] Engineering sciences",
   "duration": "4 years",
   "money": "INR 39.4 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Doctor of Philosophy [Ph.D] Computer Science",
   "duration": "3-4 year",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|GRE314",
   "Application Deadline": "Application Deadline: 07 Jan, 2023",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Philosophy [M.Phil] International                             Relations",
   "duration": "21 months",
   "money": "INR 30.6 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": "Application Deadline: 07 Jan, 2023",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Doctor of Philosophy [Ph.D] Law",
   "duration": "3-4 year",
   "money": "INR 25.7 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|GRE314",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Mathematics",
   "duration": "2 years",
   "money": "INR 24.1 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": "Application Deadline: 07 Jan, 2023",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Bachelor of Science [B.S] Medicine",
   "duration": "3 years",
   "money": "INR 37.2 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Doctor of Philosophy [Ph.D] Management",
   "duration": "4 years",
   "money": "INR 22 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|GRE314",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Doctor of Philosophy [Ph.D] Finance",
   "duration": "4 years",
   "money": "INR 22 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|GRE314",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Pharmacology",
   "duration": "1 year",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.Sc] Global Health Science and                             Epidemiology",
   "duration": "1 year",
   "money": "INR 39.7 L/Yr",
   "exam": "Exam Scores: TOEFL110|IELTS7.5",
   "Application Deadline": "Application Deadline: 09 Dec, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.Sc] International Health and                             Tropical Medicine",
   "duration": "1 year",
   "money": "INR 45.9 L/Yr",
   "exam": "Exam Scores: TOEFL110|IELTS7.5",
   "Application Deadline": "Application Deadline: 09 Dec, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Bachelor of Arts [B.A] English Language and                             Literature",
   "duration": "3 years",
   "money": "INR 32.8 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Statistical Science",
   "duration": "1 year",
   "money": "INR 30.6 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Bachelor of Science [B.S] Biochemistry - Molecular                             and Cellular",
   "duration": "4 years",
   "money": "INR 39.4 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Bachelor of Engineering Science",
   "duration": "4 years",
   "money": "INR 39.4 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Bachelor of Arts [B.A] Mathematics and Computer                             Science",
   "duration": "3 years",
   "money": "INR 39.4 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Bachelor of Science [B.S] Chemistry",
   "duration": "4 years",
   "money": "INR 39.4 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Bachelor of Arts [B.A] Physics",
   "duration": "3 years",
   "money": "INR 39.4 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Bachelor of Fine Arts [B.F.A]",
   "duration": "3 years",
   "money": "INR 32.8 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Bachelor of Arts [B.A] Biomedical Sciences",
   "duration": "3 years",
   "money": "INR 30.9 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Biochemistry",
   "duration": "2 years",
   "money": "INR 38.3 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Neuroscience",
   "duration": "1 year",
   "money": "INR 27.2 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Organic Chemistry",
   "duration": "2-3 year",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Psychological Research",
   "duration": "1 year",
   "money": "INR 27.2 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Bachelor of Science [B.S] Materials Science",
   "duration": "4 years",
   "money": "INR 39.4 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Bachelor of Arts [B.A] Archaeology and Anthropology",
   "duration": "3 years",
   "money": "INR 29.8 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Bachelor of Arts [B.A] Biological Sciences",
   "duration": "3 years",
   "money": "INR 30.9 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Physiology, Anatomy and                             Genetics",
   "duration": "1-3 year",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Doctor of Philosophy [Ph.D] Medical Sciences",
   "duration": "3-4 year",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|GRE314",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Doctor of Philosophy [Ph.D] Surgical Sciences",
   "duration": "3-4 year",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|GRE314",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Bachelor of Arts [B.A] Human Sciences",
   "duration": "3 years",
   "money": "INR 30.9 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Criminology and Criminal                             Justice",
   "duration": "9 months",
   "money": "INR 23.7 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Philosophy [M.Phil] Economics",
   "duration": "21 months",
   "money": "INR 25.7 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Energy Systems",
   "duration": "1 year",
   "money": "INR 29 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Doctor of Philosophy [Ph.D] Modern Statistics and                             Statistical Machine Learning",
   "duration": "4 years",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|GRE314",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Doctor of Philosophy [Ph.D] Molecular and Cellular                             Medicine",
   "duration": "3-4 year",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|GRE314",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Sociology",
   "duration": "1 year",
   "money": "INR 30.6 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Postgraduate Diploma Statistical Science",
   "duration": "1 year",
   "money": "INR 30.6 L/Yr",
   "exam": "Exam Scores: TOEFL95|IELTS7|GRE314",
   "Application Deadline": "Application Deadline: 21 Jan, 2023",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Research in Statistics",
   "duration": "2-3 year",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Bachelor of Arts [B.A] Economics and Management",
   "duration": "3 years",
   "money": "INR 32.8 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Bachelor of Arts [B.A] Geography",
   "duration": "3 years",
   "money": "INR 37.2 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Bachelor of Arts [B.A] Philosophy and Modern                             Languages",
   "duration": "4 years",
   "money": "INR 32.8 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Teaching History",
   "duration": "9 months",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Chemical Biology",
   "duration": "2-3 year",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Clinical Embryology",
   "duration": "1 year",
   "money": "INR 44.3 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Material Science",
   "duration": "2-3 year",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Oncology",
   "duration": "1-3 year",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Postgraduate Diploma Organisational Leadership",
   "duration": "1 year",
   "money": "INR 29 L/Yr",
   "exam": "Exam Scores: TOEFL95|IELTS7|GRE314",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Doctor of Philosophy [Ph.D] Condensed Matter Physics",
   "duration": "3-4 year",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|GRE314",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Doctor of Philosophy [Ph.D] Economics",
   "duration": "3-4 year",
   "money": "INR 23.5 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|GRE314",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Doctor of Philosophy [Ph.D] Engineering Science",
   "duration": "3-4 year",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|GRE314",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Fine Arts [M.F.A]",
   "duration": "9 months",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Doctor of Philosophy [Ph.D] Geography and the                             Environment",
   "duration": "3-4 year",
   "money": "INR 24.1 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|GRE314",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Doctor of Philosophy [Ph.D] Health Data Science",
   "duration": "4 years",
   "money": "INR 24.1 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|GRE314",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Doctor of Philosophy [Ph.D] Mathematics of Random                             Systems - Analysis, Modelling and Algorithms",
   "duration": "3-4 year",
   "money": "INR 24.1 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|GRE314",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Molecular and Cellular                             Medicine",
   "duration": "1-3 year",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Doctor of Philosophy [Ph.D] Physiology, Anatomy and                             Genetics",
   "duration": "3-4 year",
   "money": "INR 24.1 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|GRE314",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Doctor of Philosophy [Ph.D] Social Data Science",
   "duration": "3-4 year",
   "money": "INR 27.2 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|GRE314",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Doctor of Philosophy [Ph.D] Statistics",
   "duration": "3-4 year",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|GRE314",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Bachelor of Arts [B.A] Experimental Psychology",
   "duration": "3 years",
   "money": "INR 39.4 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Philosophy [M.Phil] Development Studies",
   "duration": "2 years",
   "money": "INR 30.6 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|GRE314|PTE66",
   "Application Deadline": "Application Deadline: 01 Sep, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Research in Oncology",
   "duration": "2 years",
   "money": "INR 28.8 L/Yr",
   "exam": "Exam Scores: TOEFL100|IELTS7|PTE66",
   "Application Deadline": "Application Deadline: 03 Dec, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master Public Policy",
   "duration": "1 year",
   "money": "INR 46.3 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|GRE314|PTE66",
   "Application Deadline": "Application Deadline: 07 Jan, 2023",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Economics for Development",
   "duration": "9 months",
   "money": "INR 30.6 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL110|GRE310|PTE66",
   "Application Deadline": null,
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Master of Science [M.S] Economic and Social History",
   "duration": "11 months",
   "money": null,
   "exam": "Exam Scores: IELTS7|TOEFL110|GRE310|PTE66",
   "Application Deadline": "Application Deadline: 07 Jan, 2023",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 },
 {
   "subject": "Bchelor Civil Law",
   "duration": "10 months",
   "money": "INR 38.8 L/Yr",
   "exam": "Exam Scores: IELTS7|TOEFL100|PTE66|SAT1470|ACT32",
   "Application Deadline": "Application Deadline: 15 Oct, 2022",
   "Accommodation expenses": "",
   "Property": "",
   "Description": "",
   "Cost (INR)": ""
 }
];

const columns = [
    {
        name: 'Subject',
        selector: row=>row.subject,
        sortable: true,
    },
    {
        name: 'Duration',
        selector: row=>row.duration,
        sortable: true,
    },
    {
        name: 'Fee',
        selector: row=>row.money,
        sortable: true,
    },
    {
        name: 'Exam Accepted',
        selector: row=>row.exam,
        sortable: true,
    },
];


class Ukdata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
     

    render() {
        const tableData = {
            columns,
            data,
        };
        return (
            <div>
                <div className="page-header">
                    <Row>
                        <Col sm={12}>
                            <h3 className="page-title">Oxford University Details</h3>
                        </Col>
                    </Row>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <DataTableExtensions
                                    {...tableData}
                                >
                                    <DataTable
                                        noHeader
                                        defaultSortField="id"
                                        defaultSortAsc={false}
                                        pagination
                                        highlightOnHover
                                    />
                                </DataTableExtensions>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export { Ukdata };