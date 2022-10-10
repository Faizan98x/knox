import { useState, React } from "react";
import { motion } from "framer-motion";

import "../Styles/Downloadcenter.css";

// react icons links

import { RiArrowRightSLine } from "react-icons/ri";
import { BsDot, BsDownload } from "react-icons/bs";

// ******************************************* PDF Files Links ************************************************

// ##############################Datasheets pdf files############################################

// ******************************datasheets hybrid pdf files********************************

// first one
import datasheetsHybridFirst from "../pdf-files-Knox/1.DataSheets/HybridInverters/1.ASW_H-T1_Series(8-12 kW)/SOLPLANET-Datasheet_Hybrid_H-T1_Series_0722_Global_EN.pdf";
// second one
import datasheetsHybridSecond from "../pdf-files-Knox/1.DataSheets/HybridInverters/2.ASW_H-S2_Series(3-6kW)/UM0025_ASW3000-6000H-S2_EN_V02_0722-AU (3).pdf";
// third one
import datasheetsHybridThird1 from "../pdf-files-Knox/1.DataSheets/HybridInverters/3.ASW_H-S_Series(3-6kW)/Datasheet-Hybrid-H-S2-Series-0722_AU.pdf";
import datasheetsHybridThird2 from "../pdf-files-Knox/1.DataSheets/HybridInverters/3.ASW_H-S_Series(3-6kW)/Datasheet-Hybrid-H-S2-Series-0722_Global-EN_web.pdf";
// fourth one
import datasheetsHybridFourth1 from "../pdf-files-Knox/1.DataSheets/HybridInverters/4.ASW_H-S_Series(3-5kW)/ASW-Hybrid-Series-AU-Datasheet.pdf";
import datasheetsHybridFourth2 from "../pdf-files-Knox/1.DataSheets/HybridInverters/4.ASW_H-S_Series(3-5kW)/Datasheet-Hybrid-H-S-Series-0322_Global-EN_web.pdf";

// ****************************datasheets single phase pdf files*******************************

// first one
import datasheetsSingleFirst from "../pdf-files-Knox/1.DataSheets/SinglePhaseInverters/1.ASW_3-6K_S_G2_Series/Datasheet-ASW-3K-6K-S-G2-Series-0722_Global-EN_web.pdf";
// second one
import datasheetsSingleSecond from "../pdf-files-Knox/1.DataSheets/SinglePhaseInverters/2.ASW_S_Series(3-5 kW)/ASW3000-5000-S-AU-Datasheet-V1.0_0623 (1).pdf";
import datasheetsSingleSecond2 from "../pdf-files-Knox/1.DataSheets/SinglePhaseInverters/2.ASW_S_Series(3-5 kW)/Datasheet-ASW-3-5K-S-Series-0722Global-EN_web.pdf";
// third one
import datasheetsSingleThird from "../pdf-files-Knox/1.DataSheets/SinglePhaseInverters/3.ASW_S-S_Series(1-3 kW)/Datasheet-ASW-S-S-Series-0722_Global-EN_web.pdf";
// fourth one
import datasheetsSingleFourth from "../pdf-files-Knox/1.DataSheets/SinglePhaseInverters/4.ASW_S_Series(6-10 kW)/ASW-5-10K-S-A-AU-Datasheet-_V1.0_0623-3.pdf";
import datasheetsSingleFourth2 from "../pdf-files-Knox/1.DataSheets/SinglePhaseInverters/4.ASW_S_Series(6-10 kW)/Datasheet-ASW-6-10K-S-Series_1121_EN_web.pdf";

// ***************************datasheets three phase pdf files************************************

// first one
import datasheetsThreePhaseFirst from "../pdf-files-Knox/1.DataSheets/ThreePhaseInverters/1.ASW_H-T1_Series(8-12 kW)/SOLPLANET-Datasheet_Hybrid_H-T1_Series_0722_Global_EN.pdf";
// second one
import datasheetsThreePhaseSecond from "../pdf-files-Knox/1.DataSheets/ThreePhaseInverters/2.ASW_LT-G2_Pro_Series(40-50 KW)/Datasheet-ASW-30K_33K_36K_40K_45K_50K-LT-G2-Serie-0722_Global-EN_web-1.pdf";
// third one
import datasheetsThreePhaseThird1 from "../pdf-files-Knox/1.DataSheets/ThreePhaseInverters/3.ASW_3-20K_LT-G2_Pro_Series/Datasheet-ASW-3-10K-LT-G2-Pro-Series-0722_Global-EN_web.pdf";
import datasheetsThreePhaseThird2 from "../pdf-files-Knox/1.DataSheets/ThreePhaseInverters/3.ASW_3-20K_LT-G2_Pro_Series/Datasheet-ASW-3-20K-LT-G2-A-Series-0722_AU (1).pdf";
import datasheetsThreePhaseThird3 from "../pdf-files-Knox/1.DataSheets/ThreePhaseInverters/3.ASW_3-20K_LT-G2_Pro_Series/Datasheet-ASW-ASW-12-20K-LT-G2-Pro-Series-0822_Global-EN_web.pdf";
// fourth one
import datasheetsThreePhaseFourth from "../pdf-files-Knox/1.DataSheets/ThreePhaseInverters/4.ASW_25-40K_LT-G3_Series/Datasheet-ASW-ASW-25-40K-LT-G3-Series-0722_Global-EN_web.pdf";
// fifth one
import datasheetsThreePhaseFifth from "../pdf-files-Knox/1.DataSheets/ThreePhaseInverters/5.ASW_8-20K_LT-G2_Series/Datasheet-ASW-ASW-8-20K-LT-G2-Series-0322_Global-EN_web.pdf";
// sixth one
import datasheetsThreePhaseSixth from "../pdf-files-Knox/1.DataSheets/ThreePhaseInverters/6.ASW-T-Series(3-10 kW)/Datasheet-ASW-T-Series-0722_Global-EN_web.pdf";
// seventh one
import datasheetsThreePhaseSeventh from "../pdf-files-Knox/1.DataSheets/ThreePhaseInverters/7.ASW_LT-G2_Series(30-50 kW)/Datasheet-ASW-30K_33K_36K_40K_45K_50K-LT-G2-Serie-0722_Global-EN_web.pdf";

// ##############################Certificates pdf files############################################

// ******************************Certificates hybrid pdf files********************************

// first one yet to announced
// second one
import certificatesHybridSecond from "../pdf-files-Knox/2.Certificates/1.HybridInverters/2.ASW_H-S_Series(3-5kW)/Cer_TUV-Mark_ASW3000-3680-4000-5000H-S_en_V02.pdf";

// ****************************Certificates single phase pdf files*******************************

// first one
import certificatesSingleFirst1 from "../pdf-files-Knox/2.Certificates/2.SinglePhaseInverters/1.ASW_S_Series(3-5 kW)/Cer_EN50549-1_ASWxxx-S_EN_V1.0 (1).pdf";
import certificatesSingleFirst2 from "../pdf-files-Knox/2.Certificates/2.SinglePhaseInverters/1.ASW_S_Series(3-5 kW)/Cer_IEC61727_ASWxxx-S_EN_V1.0.pdf";
import certificatesSingleFirst3 from "../pdf-files-Knox/2.Certificates/2.SinglePhaseInverters/1.ASW_S_Series(3-5 kW)/Cer_IEC62116_ASWxxx-S_EN_V1.0.pdf";
import certificatesSingleFirst4 from "../pdf-files-Knox/2.Certificates/2.SinglePhaseInverters/1.ASW_S_Series(3-5 kW)/Cer_TUV-Mark_ASWxxx-S_EN_V1.0.pdf";
import certificatesSingleFirst5 from "../pdf-files-Knox/2.Certificates/2.SinglePhaseInverters/1.ASW_S_Series(3-5 kW)/Dec_RFG_ASWxxx-S_EN_V1.0.pdf";
// second one
import certificatesSingleSecond1 from "../pdf-files-Knox/2.Certificates/2.SinglePhaseInverters/2.ASW_S-S_Series(1-3 kW)/Cer_EN50549_ASWxxxS-S_EN_V1.0.pdf";
import certificatesSingleSecond2 from "../pdf-files-Knox/2.Certificates/2.SinglePhaseInverters/2.ASW_S-S_Series(1-3 kW)/Cer_IEC61727_ASWxxxS-S_EN_V1.0.pdf";
import certificatesSingleSecond3 from "../pdf-files-Knox/2.Certificates/2.SinglePhaseInverters/2.ASW_S-S_Series(1-3 kW)/Cer_IEC62116_ASWxxxS-S_EN_V1.0.pdf";
import certificatesSingleSecond4 from "../pdf-files-Knox/2.Certificates/2.SinglePhaseInverters/2.ASW_S-S_Series(1-3 kW)/Dec_RfG_ASWxxxS-S_EN_V1.0.pdf";

// ***************************Certificates three phase pdf files************************************

// first one
import certificatesThreePhaseFirst from "../pdf-files-Knox/2.Certificates/3.ThreePhase_Inverters/1.ASW_8-20K_LT-G2_Series/Dec_CE_ASW8K-10K-12K-13K-15K-17K-20K-LT-G2_en_V01 (1).pdf";
// second one
import certificatesThreePhaseSecond from "../pdf-files-Knox/2.Certificates/3.ThreePhase_Inverters/2._ASW_LT-G2_Series(30-50KW)/CE-Dec_ASW30-33-36-40-45-50K-LT-G2_en_20211001.pdf";
// third one
import certificatesThreePhaseThird1 from "../pdf-files-Knox/2.Certificates/3.ThreePhase_Inverters/3.ASW_8-20K_LT-G2_Series/QG0023_ASW8K-20K-LT-G2_EN_540-30172-02_1121.pdf";
import certificatesThreePhaseThird2 from "../pdf-files-Knox/2.Certificates/3.ThreePhase_Inverters/3.ASW_8-20K_LT-G2_Series/QG0031_Solplanet-App_EN_0622 (1).pdf";
import certificatesThreePhaseThird3 from "../pdf-files-Knox/2.Certificates/3.ThreePhase_Inverters/3.ASW_8-20K_LT-G2_Series/UM0005_ASW-8-20K-LT-G2_EN_V03_1121.pdf";
// fourth one
import certificatesThreePhaseFourth1 from "../pdf-files-Knox/2.Certificates/3.ThreePhase_Inverters/4.ASW_T_Series(3-10 kW)/Cer_C10-11_ASW3000-4000-5000-6000-T_en_V01.pdf";
import certificatesThreePhaseFourth2 from "../pdf-files-Knox/2.Certificates/3.ThreePhase_Inverters/4.ASW_T_Series(3-10 kW)/Cer_EN50549__ASWxxx-THP_EN_V1.0.pdf";
import certificatesThreePhaseFourth3 from "../pdf-files-Knox/2.Certificates/3.ThreePhase_Inverters/4.ASW_T_Series(3-10 kW)/Cer_EN50549_ASWxxx-TLP_EN_V1.0.pdf";
import certificatesThreePhaseFourth4 from "../pdf-files-Knox/2.Certificates/3.ThreePhase_Inverters/4.ASW_T_Series(3-10 kW)/Cer_IEC61727_ASWxxx-TLP_EN_V1.0.pdf";
import certificatesThreePhaseFourth5 from "../pdf-files-Knox/2.Certificates/3.ThreePhase_Inverters/4.ASW_T_Series(3-10 kW)/Cer_IEC62116_ASWxxx-TLP_EN_V1.0.pdf";
import certificatesThreePhaseFourth6 from "../pdf-files-Knox/2.Certificates/3.ThreePhase_Inverters/4.ASW_T_Series(3-10 kW)/Cer_TUV-Mark_ASW3000-4000-5000-6000-T_en_V01.pdf";
import certificatesThreePhaseFourth7 from "../pdf-files-Knox/2.Certificates/3.ThreePhase_Inverters/4.ASW_T_Series(3-10 kW)/Cer_TUV-Mark_ASW8000-10000T_en_V01.pdf";
import certificatesThreePhaseFourth8 from "../pdf-files-Knox/2.Certificates/3.ThreePhase_Inverters/4.ASW_T_Series(3-10 kW)/Dec_CE_ASW8000-10000-T_en_V01.pdf";
import certificatesThreePhaseFourth9 from "../pdf-files-Knox/2.Certificates/3.ThreePhase_Inverters/4.ASW_T_Series(3-10 kW)/Dec_RfG_ASWxxx-THP_EN_V1.0.pdf";
import certificatesThreePhaseFourth10 from "../pdf-files-Knox/2.Certificates/3.ThreePhase_Inverters/4.ASW_T_Series(3-10 kW)/Dec_RfG_ASWxxx-TLP_EN_V1.0.pdf";

// ##############################Instructions pdf files############################################

// ******************************Instructions hybrid pdf files********************************

// first one
import InstructionsHybridFirst from "../pdf-files-Knox/3.Instructions/1.HybridInverters/1.ASW-8-12K-H-T1/QG0031_Solplanet-App_EN_0622-1.pdf";
// second one
import InstructionsHybridSecond from "../pdf-files-Knox/3.Instructions/1.HybridInverters/2.ASW-H-S2-Series(3-6kW)/UM0025_ASW3000-6000H-S2_EN_V02_0722-AU (3).pdf";
// third one
import InstructionsHybridThird1 from "../pdf-files-Knox/3.Instructions/1.HybridInverters/3.ASW-H-S_Series(3-5 kW)/Installation-and-Operation-Instruction_Aihome.pdf";
import InstructionsHybridThird2 from "../pdf-files-Knox/3.Instructions/1.HybridInverters/3.ASW-H-S_Series(3-5 kW)/QG0017-ASW3000-5000H-S_EN_540-30136-01_0421.pdf";
import InstructionsHybridThird3 from "../pdf-files-Knox/3.Instructions/1.HybridInverters/3.ASW-H-S_Series(3-5 kW)/QG0031_Solplanet-App_EN_0622 (1).pdf";
import InstructionsHybridThird4 from "../pdf-files-Knox/3.Instructions/1.HybridInverters/3.ASW-H-S_Series(3-5 kW)/UM0007_ASW3000-5000H-S_EN_V02_0422.pdf";
import InstructionsHybridThird5 from "../pdf-files-Knox/3.Instructions/1.HybridInverters/3.ASW-H-S_Series(3-5 kW)/UM0007_ASW3000-5000H-S_EN_V03_0629.pdf";

// ****************************Instructions single phase pdf files*******************************

// first one
import InstructionsSingleFirst1 from "../pdf-files-Knox/3.Instructions/2.SinglePhaseInverters/1.ASW-S-Series(6-10kW)/QG0028_ASW6000-10000-S_EN_540-30170-00_1121.pdf";
import InstructionsSingleFirst2 from "../pdf-files-Knox/3.Instructions/2.SinglePhaseInverters/1.ASW-S-Series(6-10kW)/QG0031_Solplanet-App_EN_0622 (1).pdf";
import InstructionsSingleFirst3 from "../pdf-files-Knox/3.Instructions/2.SinglePhaseInverters/1.ASW-S-Series(6-10kW)/UM0012_ASW-6-10k-Series_EN_V03_0522.pdf";
import InstructionsSingleFirst4 from "../pdf-files-Knox/3.Instructions/2.SinglePhaseInverters/1.ASW-S-Series(6-10kW)/UM0026_ASW5000-10000-S-A_EN_V01_0622.pdf";
// second one
import InstructionsSingleSecond1 from "../pdf-files-Knox/3.Instructions/2.SinglePhaseInverters/2.ASW_S-S_Series(1-3kW)/QG0002_ASW1000S-3000S-S_EN_540-30113-03_0722.pdf";
import InstructionsSingleSecond2 from "../pdf-files-Knox/3.Instructions/2.SinglePhaseInverters/2.ASW_S-S_Series(1-3kW)/QG0031_Solplanet-App_EN_0622 (1).pdf";
import InstructionsSingleSecond3 from "../pdf-files-Knox/3.Instructions/2.SinglePhaseInverters/2.ASW_S-S_Series(1-3kW)/QG0031_Solplanet-App_EN_0622 (1).pdf";
// third one
import InstructionsSingleThird1 from "../pdf-files-Knox/3.Instructions/2.SinglePhaseInverters/3.ASW_S_Series(3-5kW)/QG0021_ASW3000-5000-S_EN_540-30130-01_0722-1.pdf";
import InstructionsSingleThird2 from "../pdf-files-Knox/3.Instructions/2.SinglePhaseInverters/3.ASW_S_Series(3-5kW)/UM0009_ASW3000-5000-S_EN_V03_0622.pdf";
import InstructionsSingleThird3 from "../pdf-files-Knox/3.Instructions/2.SinglePhaseInverters/3.ASW_S_Series(3-5kW)/UM0009_ASW3000-5000-S_EN_V04_0722.pdf";

// ***************************Instructions three phase pdf files************************************

// first one
import InstructionsThreePhaseFirst from "../pdf-files-Knox/3.Instructions/3.ThreePhaseInverters/1.ASW-LT-G2-Pro-Series40-50KW/QG0031_Solplanet-App_EN_0622 (1).pdf";
// second one
import InstructionsThreePhaseSecond1 from "../pdf-files-Knox/3.Instructions/3.ThreePhaseInverters/2.ASW-25-40K-LT-G3-Series/QG0031_Solplanet-App_EN_0622 (1).pdf";
import InstructionsThreePhaseSecond2 from "../pdf-files-Knox/3.Instructions/3.ThreePhaseInverters/2.ASW-25-40K-LT-G3-Series/UM0016_ASW-25K-40K-LT-G3_EN_V02_0622.pdf";
// third one
import InstructionsThreePhaseThird1 from "../pdf-files-Knox/3.Instructions/3.ThreePhaseInverters/3.ASW-3-20K-LT-G2-Pro-Series/QG0031_Solplanet-App_EN_0622-1.pdf";
import InstructionsThreePhaseThird2 from "../pdf-files-Knox/3.Instructions/3.ThreePhaseInverters/3.ASW-3-20K-LT-G2-Pro-Series/UM0014_ASW-3K-20K-LT-G2-PRO_EN_V02_0622.pdf";
import InstructionsThreePhaseThird3 from "../pdf-files-Knox/3.Instructions/3.ThreePhaseInverters/3.ASW-3-20K-LT-G2-Pro-Series/UM0024_ASW-3K-20K-LT-G2-A_EN_V02_0722.pdf";
// fourth one
import InstructionsThreePhaseFourth1 from "../pdf-files-Knox/3.Instructions/3.ThreePhaseInverters/4.ASW-3-20K-LT-G2-Pro-Series/Datasheet-ASW-3-10K-LT-G2-Pro-Series-0722_Global-EN_web.pdf";
import InstructionsThreePhaseFourth2 from "../pdf-files-Knox/3.Instructions/3.ThreePhaseInverters/4.ASW-3-20K-LT-G2-Pro-Series/Datasheet-ASW-3-20K-LT-G2-A-Series-0722_AU (1).pdf";
import InstructionsThreePhaseFourth3 from "../pdf-files-Knox/3.Instructions/3.ThreePhaseInverters/4.ASW-3-20K-LT-G2-Pro-Series/Datasheet-ASW-3-20K-LT-G2-A-Series-0722_AU (1).pdf";
// fifth one
import InstructionsThreePhaseFifth1 from "../pdf-files-Knox/3.Instructions/3.ThreePhaseInverters/5.ASW-LT-G2-Series30-50KW/QG0026_ASW30K-50K-LT-G2_EN_540-30166-03_0822.pdf";
import InstructionsThreePhaseFifth2 from "../pdf-files-Knox/3.Instructions/3.ThreePhaseInverters/5.ASW-LT-G2-Series30-50KW/QG0031_Solplanet-App_EN_0622 (1).pdf";
import InstructionsThreePhaseFifth3 from "../pdf-files-Knox/3.Instructions/3.ThreePhaseInverters/5.ASW-LT-G2-Series30-50KW/UM0011_ASW-30-50K-LT-G2_EN_V04_0722.pdf";
// sixth one
import InstructionsThreePhaseSixth1 from "../pdf-files-Knox/3.Instructions/3.ThreePhaseInverters/6.ASW-8-20K-LT-G2-Series/QG0023_ASW8K-20K-LT-G2_EN_540-30172-02_1121.pdf";
import InstructionsThreePhaseSixth2 from "../pdf-files-Knox/3.Instructions/3.ThreePhaseInverters/6.ASW-8-20K-LT-G2-Series/QG0031_Solplanet-App_EN_0622 (1).pdf";
import InstructionsThreePhaseSixth3 from "../pdf-files-Knox/3.Instructions/3.ThreePhaseInverters/6.ASW-8-20K-LT-G2-Series/UM0005_ASW-8-20K-LT-G2_EN_V03_1121.pdf";
// seventh one
import InstructionsThreePhaseSeventh1 from "../pdf-files-Knox/3.Instructions/3.ThreePhaseInverters/7.ASW-T-Series3-10KW/QG0007_ASW3000-10000-T_EN_540-30110-04_0722.pdf";
import InstructionsThreePhaseSeventh2 from "../pdf-files-Knox/3.Instructions/3.ThreePhaseInverters/7.ASW-T-Series3-10KW/QG0031_Solplanet-App_EN_0622 (1).pdf";
import InstructionsThreePhaseSeventh3 from "../pdf-files-Knox/3.Instructions/3.ThreePhaseInverters/7.ASW-T-Series3-10KW/UM0006_ASW3000-10000-T_EN_V02_0722.pdf";

// ##############################Brochures pdf files############################################

import Brochurespdf from "../pdf-files-Knox/4.Brochures/ProductBrochures/Global-Brochure-Solplanet-Global-EN-0722 (3).pdf";

function Downloadcenter() {
  // **************************************************use states************************************************

  // 1st block usestates
  const [showdatasheets, setShowdatasheets] = useState(false);
  const [showcertificates, setShowcertificates] = useState(false);
  const [showinstructions, setShowinstructions] = useState(false);
  const [showbrochures, setShowbrochures] = useState(false);

  // 2nd block usestates
  const [showdatasheetshybrid, setShowdatasheetshybrid] = useState(false);
  const [showdatasheetssingle, setShowdatasheetssingle] = useState(false);
  const [showdatasheetsthree, setShowdatasheetsthree] = useState(false);

  const [showcertificateshybrid, setShowcertificateshybrid] = useState(false);
  const [showcertificatessingle, setShowcertificatessingle] = useState(false);
  const [showcertificatesthree, setShowcertificatesthree] = useState(false);

  const [showinstructionshybrid, setShowinstructionshybrid] = useState(false);
  const [showinstructionssingle, setShowinstructionssingle] = useState(false);
  const [showinstructionsthree, setShowinstructionsthree] = useState(false);

  const [showbrochuresDownload, setShowbrochuresDownload] = useState(false);

  // 3rd block usestates

  // DATASHEETS HYBRID, SINGLE & THREE PHASE SUBDIVISION
  const [showdatasheetshybridDownload1, setShowdatasheetshybridDownload1] =
    useState(false);
  const [showdatasheetshybridDownload2, setShowdatasheetshybridDownload2] =
    useState(false);
  const [showdatasheetshybridDownload3, setShowdatasheetshybridDownload3] =
    useState(false);
  const [showdatasheetshybridDownload4, setShowdatasheetshybridDownload4] =
    useState(false);

  const [showdatasheetssingleDownload1, setShowdatasheetssingleDownload1] =
    useState(false);
  const [showdatasheetssingleDownload2, setShowdatasheetssingleDownload2] =
    useState(false);
  const [showdatasheetssingleDownload3, setShowdatasheetssingleDownload3] =
    useState(false);
  const [showdatasheetssingleDownload4, setShowdatasheetssingleDownload4] =
    useState(false);

  const [showdatasheetsthreeDownload1, setShowdatasheetsthreeDownload1] =
    useState(false);
  const [showdatasheetsthreeDownload2, setShowdatasheetsthreeDownload2] =
    useState(false);
  const [showdatasheetsthreeDownload3, setShowdatasheetsthreeDownload3] =
    useState(false);
  const [showdatasheetsthreeDownload4, setShowdatasheetsthreeDownload4] =
    useState(false);
  const [showdatasheetsthreeDownload5, setShowdatasheetsthreeDownload5] =
    useState(false);
  const [showdatasheetsthreeDownload6, setShowdatasheetsthreeDownload6] =
    useState(false);
  const [showdatasheetsthreeDownload7, setShowdatasheetsthreeDownload7] =
    useState(false);

  // CERTIFICATES HYBRID, SINGLE & THREE PHASE SUBDIVISION

  const [showcertificateshybridDownload1, setShowcertificateshybridDownload1] =
    useState(false);

  const [showcertificatessingleDownload1, setShowcertificatessingleDownload1] =
    useState(false);
  const [showcertificatessingleDownload2, setShowcertificatessingleDownload2] =
    useState(false);

  const [showcertificatesthreeDownload1, setShowcertificatesthreeDownload1] =
    useState(false);
  const [showcertificatesthreeDownload2, setShowcertificatesthreeDownload2] =
    useState(false);
  const [showcertificatesthreeDownload3, setShowcertificatesthreeDownload3] =
    useState(false);
  const [showcertificatesthreeDownload4, setShowcertificatesthreeDownload4] =
    useState(false);

  // INSTRUCTIONS HYBRID, SINGLE & THREE PHASE SUBDIVISION

  const [showinstructionshybridDownload1, setShowinstructionshybridDownload1] =
    useState(false);
  const [showinstructionshybridDownload2, setShowinstructionshybridDownload2] =
    useState(false);
  const [showinstructionshybridDownload3, setShowinstructionshybridDownload3] =
    useState(false);

  const [showinstructionssingleDownload1, setShowinstructionssingleDownload1] =
    useState(false);
  const [showinstructionssingleDownload2, setShowinstructionssingleDownload2] =
    useState(false);
  const [showinstructionssingleDownload3, setShowinstructionssingleDownload3] =
    useState(false);

  const [showinstructionsthreeDownload1, setShowinstructionsthreeDownload1] =
    useState(false);
  const [showinstructionsthreeDownload2, setShowinstructionsthreeDownload2] =
    useState(false);
  const [showinstructionsthreeDownload3, setShowinstructionsthreeDownload3] =
    useState(false);
  const [showinstructionsthreeDownload4, setShowinstructionsthreeDownload4] =
    useState(false);
  const [showinstructionsthreeDownload5, setShowinstructionsthreeDownload5] =
    useState(false);
  const [showinstructionsthreeDownload6, setShowinstructionsthreeDownload6] =
    useState(false);
  const [showinstructionsthreeDownload7, setShowinstructionsthreeDownload7] =
    useState(false);

  return (
    <div className="download-block">
      <h6>DOWNLOAD CENTER</h6>

      {/* main download headings */}

      <div className="download-block-a">
        <div className="download-block-0">
          {/* Datasheets button  */}
          <button
            className={showdatasheets ? "button" : "button2"}
            onClick={() => {
              setShowdatasheets(true);
              setShowcertificates(false);
              setShowinstructions(false);
              setShowbrochures(false);

              setShowdatasheetshybrid(false);
              setShowdatasheetssingle(false);
              setShowdatasheetsthree(false);

              setShowcertificateshybrid(false);
              setShowcertificatessingle(false);
              setShowcertificatesthree(false);

              setShowinstructionshybrid(false);
              setShowinstructionssingle(false);
              setShowinstructionsthree(false);

              setShowbrochuresDownload(false);

              setShowdatasheetshybridDownload1(false);
              setShowdatasheetshybridDownload2(false);
              setShowdatasheetshybridDownload3(false);
              setShowdatasheetshybridDownload4(false);
              setShowdatasheetssingleDownload1(false);
              setShowdatasheetssingleDownload2(false);
              setShowdatasheetssingleDownload3(false);
              setShowdatasheetssingleDownload4(false);
              setShowdatasheetsthreeDownload1(false);
              setShowdatasheetsthreeDownload2(false);
              setShowdatasheetsthreeDownload3(false);
              setShowdatasheetsthreeDownload4(false);
              setShowdatasheetsthreeDownload5(false);
              setShowdatasheetsthreeDownload6(false);
              setShowdatasheetsthreeDownload7(false);

              setShowcertificateshybridDownload1(false);
              setShowcertificatessingleDownload1(false);
              setShowcertificatessingleDownload2(false);
              setShowcertificatesthreeDownload1(false);
              setShowcertificatesthreeDownload2(false);
              setShowcertificatesthreeDownload3(false);
              setShowcertificatesthreeDownload4(false);

              setShowinstructionshybridDownload1(false);
              setShowinstructionshybridDownload2(false);
              setShowinstructionshybridDownload3(false);
              setShowinstructionssingleDownload1(false);
              setShowinstructionssingleDownload2(false);
              setShowinstructionssingleDownload3(false);
              setShowinstructionsthreeDownload1(false);
              setShowinstructionsthreeDownload2(false);
              setShowinstructionsthreeDownload3(false);
              setShowinstructionsthreeDownload4(false);
              setShowinstructionsthreeDownload5(false);
              setShowinstructionsthreeDownload6(false);
              setShowinstructionsthreeDownload7(false);
            }}
          >
            <BsDot size={"3rem"} /> Datasheets
          </button>
          <br /> <br /> <br />
          {/* Certificates Button */}
          <button
            className={showcertificates ? "button" : "button2"}
            onClick={() => {
              setShowdatasheets(false);
              setShowcertificates(true);
              setShowinstructions(false);
              setShowbrochures(false);

              setShowdatasheetshybrid(false);
              setShowdatasheetssingle(false);
              setShowdatasheetsthree(false);

              setShowcertificateshybrid(false);
              setShowcertificatessingle(false);
              setShowcertificatesthree(false);

              setShowinstructionshybrid(false);
              setShowinstructionssingle(false);
              setShowinstructionsthree(false);

              setShowbrochuresDownload(false);

              setShowdatasheetshybridDownload1(false);
              setShowdatasheetshybridDownload2(false);
              setShowdatasheetshybridDownload3(false);
              setShowdatasheetshybridDownload4(false);
              setShowdatasheetssingleDownload1(false);
              setShowdatasheetssingleDownload2(false);
              setShowdatasheetssingleDownload3(false);
              setShowdatasheetssingleDownload4(false);
              setShowdatasheetsthreeDownload1(false);
              setShowdatasheetsthreeDownload2(false);
              setShowdatasheetsthreeDownload3(false);
              setShowdatasheetsthreeDownload4(false);
              setShowdatasheetsthreeDownload5(false);
              setShowdatasheetsthreeDownload6(false);
              setShowdatasheetsthreeDownload7(false);

              setShowcertificateshybridDownload1(false);
              setShowcertificatessingleDownload1(false);
              setShowcertificatessingleDownload2(false);
              setShowcertificatesthreeDownload1(false);
              setShowcertificatesthreeDownload2(false);
              setShowcertificatesthreeDownload3(false);
              setShowcertificatesthreeDownload4(false);

              setShowinstructionshybridDownload1(false);
              setShowinstructionshybridDownload2(false);
              setShowinstructionshybridDownload3(false);
              setShowinstructionssingleDownload1(false);
              setShowinstructionssingleDownload2(false);
              setShowinstructionssingleDownload3(false);
              setShowinstructionsthreeDownload1(false);
              setShowinstructionsthreeDownload2(false);
              setShowinstructionsthreeDownload3(false);
              setShowinstructionsthreeDownload4(false);
              setShowinstructionsthreeDownload5(false);
              setShowinstructionsthreeDownload6(false);
              setShowinstructionsthreeDownload7(false);
            }}
          >
            <BsDot size={"3rem"} /> Certificates
          </button>
          <br /> <br /> <br />
          {/* Instructions Button */}
          <button
            className={showinstructions ? "button" : "button2"}
            onClick={() => {
              setShowdatasheets(false);
              setShowcertificates(false);
              setShowinstructions(true);
              setShowbrochures(false);

              setShowdatasheetshybrid(false);
              setShowdatasheetssingle(false);
              setShowdatasheetsthree(false);

              setShowcertificateshybrid(false);
              setShowcertificatessingle(false);
              setShowcertificatesthree(false);

              setShowinstructionshybrid(false);
              setShowinstructionssingle(false);
              setShowinstructionsthree(false);

              setShowbrochuresDownload(false);

              setShowdatasheetshybridDownload1(false);
              setShowdatasheetshybridDownload2(false);
              setShowdatasheetshybridDownload3(false);
              setShowdatasheetshybridDownload4(false);
              setShowdatasheetssingleDownload1(false);
              setShowdatasheetssingleDownload2(false);
              setShowdatasheetssingleDownload3(false);
              setShowdatasheetssingleDownload4(false);
              setShowdatasheetsthreeDownload1(false);
              setShowdatasheetsthreeDownload2(false);
              setShowdatasheetsthreeDownload3(false);
              setShowdatasheetsthreeDownload4(false);
              setShowdatasheetsthreeDownload5(false);
              setShowdatasheetsthreeDownload6(false);
              setShowdatasheetsthreeDownload7(false);

              setShowcertificateshybridDownload1(false);
              setShowcertificatessingleDownload1(false);
              setShowcertificatessingleDownload2(false);
              setShowcertificatesthreeDownload1(false);
              setShowcertificatesthreeDownload2(false);
              setShowcertificatesthreeDownload3(false);
              setShowcertificatesthreeDownload4(false);

              setShowinstructionshybridDownload1(false);
              setShowinstructionshybridDownload2(false);
              setShowinstructionshybridDownload3(false);
              setShowinstructionssingleDownload1(false);
              setShowinstructionssingleDownload2(false);
              setShowinstructionssingleDownload3(false);
              setShowinstructionsthreeDownload1(false);
              setShowinstructionsthreeDownload2(false);
              setShowinstructionsthreeDownload3(false);
              setShowinstructionsthreeDownload4(false);
              setShowinstructionsthreeDownload5(false);
              setShowinstructionsthreeDownload6(false);
              setShowinstructionsthreeDownload7(false);
            }}
          >
            <BsDot size={"3rem"} /> Instructions
          </button>
          <br /> <br /> <br />
          {/* Brochures Button */}
          <button
            className={showbrochures ? "button" : "button2"}
            onClick={() => {
              setShowdatasheets(false);
              setShowcertificates(false);
              setShowinstructions(false);
              setShowbrochures(true);

              setShowdatasheetshybrid(false);
              setShowdatasheetssingle(false);
              setShowdatasheetsthree(false);

              setShowcertificateshybrid(false);
              setShowcertificatessingle(false);
              setShowcertificatesthree(false);

              setShowinstructionshybrid(false);
              setShowinstructionssingle(false);
              setShowinstructionsthree(false);

              setShowbrochuresDownload(false);

              setShowdatasheetshybridDownload1(false);
              setShowdatasheetshybridDownload2(false);
              setShowdatasheetshybridDownload3(false);
              setShowdatasheetshybridDownload4(false);
              setShowdatasheetssingleDownload1(false);
              setShowdatasheetssingleDownload2(false);
              setShowdatasheetssingleDownload3(false);
              setShowdatasheetssingleDownload4(false);
              setShowdatasheetsthreeDownload1(false);
              setShowdatasheetsthreeDownload2(false);
              setShowdatasheetsthreeDownload3(false);
              setShowdatasheetsthreeDownload4(false);
              setShowdatasheetsthreeDownload5(false);
              setShowdatasheetsthreeDownload6(false);
              setShowdatasheetsthreeDownload7(false);

              setShowcertificateshybridDownload1(false);
              setShowcertificatessingleDownload1(false);
              setShowcertificatessingleDownload2(false);
              setShowcertificatesthreeDownload1(false);
              setShowcertificatesthreeDownload2(false);
              setShowcertificatesthreeDownload3(false);
              setShowcertificatesthreeDownload4(false);

              setShowinstructionshybridDownload1(false);
              setShowinstructionshybridDownload2(false);
              setShowinstructionshybridDownload3(false);
              setShowinstructionssingleDownload1(false);
              setShowinstructionssingleDownload2(false);
              setShowinstructionssingleDownload3(false);
              setShowinstructionsthreeDownload1(false);
              setShowinstructionsthreeDownload2(false);
              setShowinstructionsthreeDownload3(false);
              setShowinstructionsthreeDownload4(false);
              setShowinstructionsthreeDownload5(false);
              setShowinstructionsthreeDownload6(false);
              setShowinstructionsthreeDownload7(false);
            }}
          >
            <BsDot size={"3rem"} /> Brochures
          </button>
        </div>

        {/* datasheets, instructions, certificates & brochures block ends */}

        {/* datasheets sub block starts */}

        <div className="download-block-0">
          {/* datasheets sub bloack */}

          {showdatasheets ? (
            <motion.div
              initial={{ X: -100, opacity: 0 }}
              animate={{ X: 0, opacity: 1 }}
              exit={{ X: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="datasheets-area"
            >
              {/* // DataSheets Hybrid Button */}
              <button
                className={showdatasheetshybrid ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybrid(true);
                  setShowdatasheetssingle(false);
                  setShowdatasheetsthree(false);
                }}
              >
                <BsDot size={"3rem"} /> Hybrid
              </button>
              <br /> <br /> <br />
              <button
                className={showdatasheetssingle ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybrid(false);
                  setShowdatasheetssingle(true);
                  setShowdatasheetsthree(false);
                }}
              >
                <BsDot size={"3rem"} /> Single Phase
              </button>
              <br /> <br /> <br />
              <button
                className={showdatasheetsthree ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybrid(false);
                  setShowdatasheetssingle(false);
                  setShowdatasheetsthree(true);
                }}
              >
                <BsDot size={"3rem"} /> Three Phase
              </button>
            </motion.div>
          ) : (
            " "
          )}

          {/* certificates sub bloack */}

          {showcertificates ? (
            <motion.div
              initial={{ X: -100, opacity: 0 }}
              animate={{ X: 0, opacity: 1 }}
              exit={{ X: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="datasheets-area"
            >
              {/* // DataSheets Hybrid Button */}
              <button
                className={showcertificateshybrid ? "button" : "button2"}
                onClick={() => {
                  setShowcertificateshybrid(true);
                  setShowcertificatessingle(false);
                  setShowcertificatesthree(false);
                }}
              >
                <BsDot size={"3rem"} /> certificates Hybrid
              </button>
              <br /> <br /> <br />
              <button
                className={showcertificatessingle ? "button" : "button2"}
                onClick={() => {
                  setShowcertificateshybrid(false);
                  setShowcertificatessingle(true);
                  setShowcertificatesthree(false);
                }}
              >
                <BsDot size={"3rem"} /> certificates Single Phase
              </button>
              <br /> <br /> <br />
              <button
                className={showcertificatesthree ? "button" : "button2"}
                onClick={() => {
                  setShowcertificateshybrid(false);
                  setShowcertificatessingle(false);
                  setShowcertificatesthree(true);
                }}
              >
                <BsDot size={"3rem"} /> certificates Three Phase
              </button>
            </motion.div>
          ) : (
            " "
          )}

          {/* Instructions sub block */}

          {showinstructions ? (
            // || showcertificates || showinstructions
            <motion.div
              initial={{ X: -100, opacity: 0 }}
              animate={{ X: 0, opacity: 1 }}
              exit={{ X: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="datasheets-area"
            >
              {/* // DataSheets Hybrid Button */}
              <button
                className={showinstructionshybrid ? "button" : "button2"}
                onClick={() => {
                  setShowinstructionshybrid(true);
                  setShowinstructionssingle(false);
                  setShowinstructionsthree(false);
                }}
              >
                <BsDot size={"3rem"} /> instructions Hybrid
              </button>
              <br /> <br /> <br />
              <button
                className={showinstructionssingle ? "button" : "button2"}
                onClick={() => {
                  setShowinstructionshybrid(false);
                  setShowinstructionssingle(true);
                  setShowinstructionsthree(false);
                }}
              >
                <BsDot size={"3rem"} /> instructions Single Phase
              </button>
              <br /> <br /> <br />
              <button
                className={showinstructionsthree ? "button" : "button2"}
                onClick={() => {
                  setShowinstructionshybrid(false);
                  setShowinstructionssingle(false);
                  setShowinstructionsthree(true);
                }}
              >
                <BsDot size={"3rem"} /> instructions Three Phase
              </button>
            </motion.div>
          ) : (
            " "
          )}

          {showbrochures ? (
            <motion.div
              initial={{ X: -100, opacity: 0 }}
              animate={{ X: 0, opacity: 1 }}
              exit={{ X: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="datasheets-area"
            >
              <button
                className={showbrochuresDownload ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybrid(false);
                  setShowdatasheetssingle(false);
                  setShowdatasheetsthree(false);

                  setShowcertificateshybrid(false);
                  setShowcertificatessingle(false);
                  setShowcertificatesthree(false);

                  setShowinstructionshybrid(false);
                  setShowinstructionssingle(false);
                  setShowinstructionsthree(false);

                  setShowbrochuresDownload(true);
                }}
              >
                <BsDot size={"3rem"} /> Product Brochures
              </button>
            </motion.div>
          ) : (
            " "
          )}
        </div>
        <div className="download-block-0">
          {/* hybrid inverter  */}

          {showdatasheetshybrid ? (
            <motion.div
              initial={{ X: -100, opacity: 0 }}
              animate={{ X: 0, opacity: 1 }}
              exit={{ X: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="datasheets-area"
            >
              <button
                className={showdatasheetshybridDownload1 ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybridDownload1(true);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(false);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> ASW H-T1 Series (8-12 kW)
              </button>

              <button
                className={showdatasheetshybridDownload2 ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(true);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(false);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> ASW H-S Series (3-6 kW)
              </button>

              <button
                className={showdatasheetshybridDownload3 ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(true);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(false);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> ASW H-S2 Series (3-6 kW)
              </button>

              <button
                className={showdatasheetshybridDownload4 ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(true);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(false);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> ASW H-S Series (3-5 kW)
              </button>
            </motion.div>
          ) : (
            " "
          )}

          {/* single phase inverter */}

          {showdatasheetssingle ? (
            <motion.div
              initial={{ X: -100, opacity: 0 }}
              animate={{ X: 0, opacity: 1 }}
              exit={{ X: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="datasheets-area"
            >
              <button
                className={showdatasheetssingleDownload1 ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(true);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(false);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> ASW 3-6K S G2 Series
              </button>
              <button
                className={showdatasheetssingleDownload2 ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(true);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(false);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> ASW S Series (3-5kW)
              </button>
              <button
                className={showdatasheetssingleDownload3 ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(true);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(false);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> ASW S-S Series (1-3kW)
              </button>
              <button
                className={showdatasheetssingleDownload4 ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(true);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(false);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> ASW S Series (6-10kW)
              </button>
            </motion.div>
          ) : (
            " "
          )}

          {/* three phase inverter */}

          {showdatasheetsthree ? (
            <div className="datasheets-area">
              <button
                className={showdatasheetsthreeDownload1 ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(true);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(false);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> ASW S2 3 to 6kw
              </button>
              <button
                className={showdatasheetsthreeDownload2 ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(true);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(false);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> ASW S2 3 to 6kw
              </button>
              <button
                className={showdatasheetsthreeDownload3 ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(true);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(false);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> ASW S2 3 to 6kw
              </button>
              <button
                className={showdatasheetsthreeDownload4 ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(true);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(false);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> ASW S2 3 to 6kw
              </button>
              <button
                className={showdatasheetsthreeDownload5 ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(true);
                  setShowdatasheetsthreeDownload6(false);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> ASW S2 3 to 6kw
              </button>
              <button
                className={showdatasheetsthreeDownload6 ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> ASW S2 3 to 6kw
              </button>
              <button
                className={showdatasheetsthreeDownload7 ? "button" : "button2"}
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(false);
                  setShowdatasheetsthreeDownload7(true);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> ASW S2 3 to 6kw
              </button>
            </div>
          ) : (
            " "
          )}

          {/* certificates sub bloack */}

          {showcertificateshybrid ? (
            <motion.div
              initial={{ X: -100, opacity: 0 }}
              animate={{ X: 0, opacity: 1 }}
              exit={{ X: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="datasheets-area"
            >
              <button
                className={
                  showcertificateshybridDownload1 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(true);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} />
                certificates ASW 3 to 6kw
              </button>
            </motion.div>
          ) : (
            " "
          )}

          {/* single phase inverter */}

          {showcertificatessingle ? (
            <motion.div
              initial={{ X: -100, opacity: 0 }}
              animate={{ X: 0, opacity: 1 }}
              exit={{ X: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="datasheets-area"
            >
              <button
                className={
                  showcertificatessingleDownload1 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(true);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} />
                certificates ASW H2 3 to 6kw
              </button>
              <button
                className={
                  showcertificatessingleDownload2 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(true);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} />
                certificates ASW H2 3 to 6kw
              </button>
            </motion.div>
          ) : (
            " "
          )}

          {/* three phase inverter */}

          {showcertificatesthree ? (
            <div className="datasheets-area">
              <button
                className={
                  showcertificatesthreeDownload1 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(true);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} />
                certificates ASW S2 3 to 6kw
              </button>
              <button
                className={
                  showcertificatesthreeDownload2 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(true);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} />
                certificates ASW S2 3 to 6kw
              </button>
              <button
                className={
                  showcertificatesthreeDownload3 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(true);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} />
                certificates ASW S2 3 to 6kw
              </button>
              <button
                className={
                  showcertificatesthreeDownload4 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(true);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} />
                certificates ASW S2 3 to 6kw
              </button>
            </div>
          ) : (
            " "
          )}

          {/* instructions sub block */}

          {showinstructionshybrid ? (
            <motion.div
              initial={{ X: -100, opacity: 0 }}
              animate={{ X: 0, opacity: 1 }}
              exit={{ X: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="datasheets-area"
            >
              <button
                className={
                  showinstructionshybridDownload1 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(true);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} />
                instructions ASW 3 to 6kw
              </button>
              <button
                className={
                  showinstructionshybridDownload2 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(true);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} />
                instructions ASW 3 to 6kw
              </button>
              <button
                className={
                  showinstructionshybridDownload3 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(true);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} />
                instructions ASW 3 to 6kw
              </button>
            </motion.div>
          ) : (
            " "
          )}

          {/* single phase inverter */}

          {showinstructionssingle ? (
            <motion.div
              initial={{ X: -100, opacity: 0 }}
              animate={{ X: 0, opacity: 1 }}
              exit={{ X: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="datasheets-area"
            >
              <button
                className={
                  showinstructionssingleDownload1 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(true);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} />
                instructions ASW H2 3 to 6kw
              </button>
              <button
                className={
                  showinstructionssingleDownload2 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(true);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} />
                instructions ASW H2 3 to 6kw
              </button>
              <button
                className={
                  showinstructionssingleDownload3 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(true);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} />
                instructions ASW H2 3 to 6kw
              </button>
            </motion.div>
          ) : (
            " "
          )}

          {/* three phase inverter */}

          {showinstructionsthree ? (
            <div className="datasheets-area">
              <button
                className={
                  showinstructionsthreeDownload1 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(true);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> instructions ASW S2 3 to 6kw
              </button>
              <button
                className={
                  showinstructionsthreeDownload2 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(true);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> instructions ASW S2 3 to 6kw
              </button>
              <button
                className={
                  showinstructionsthreeDownload3 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(true);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> instructions ASW S2 3 to 6kw
              </button>
              <button
                className={
                  showinstructionsthreeDownload4 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(true);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> instructions ASW S2 3 to 6kw
              </button>
              <button
                className={
                  showinstructionsthreeDownload5 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(true);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> instructions ASW S2 3 to 6kw
              </button>
              <button
                className={
                  showinstructionsthreeDownload6 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(true);
                  setShowinstructionsthreeDownload7(false);
                }}
              >
                <BsDot size={"3rem"} /> instructions ASW S2 3 to 6kw
              </button>
              <button
                className={
                  showinstructionsthreeDownload7 ? "button" : "button2"
                }
                onClick={() => {
                  setShowdatasheetshybridDownload1(false);
                  setShowdatasheetshybridDownload2(false);
                  setShowdatasheetshybridDownload3(false);
                  setShowdatasheetshybridDownload4(false);
                  setShowdatasheetssingleDownload1(false);
                  setShowdatasheetssingleDownload2(false);
                  setShowdatasheetssingleDownload3(false);
                  setShowdatasheetssingleDownload4(false);
                  setShowdatasheetsthreeDownload1(false);
                  setShowdatasheetsthreeDownload2(false);
                  setShowdatasheetsthreeDownload3(false);
                  setShowdatasheetsthreeDownload4(false);
                  setShowdatasheetsthreeDownload5(false);
                  setShowdatasheetsthreeDownload6(true);
                  setShowdatasheetsthreeDownload7(false);

                  setShowcertificateshybridDownload1(false);
                  setShowcertificatessingleDownload1(false);
                  setShowcertificatessingleDownload2(false);
                  setShowcertificatesthreeDownload1(false);
                  setShowcertificatesthreeDownload2(false);
                  setShowcertificatesthreeDownload3(false);
                  setShowcertificatesthreeDownload4(false);

                  setShowinstructionshybridDownload1(false);
                  setShowinstructionshybridDownload2(false);
                  setShowinstructionshybridDownload3(false);
                  setShowinstructionssingleDownload1(false);
                  setShowinstructionssingleDownload2(false);
                  setShowinstructionssingleDownload3(false);
                  setShowinstructionsthreeDownload1(false);
                  setShowinstructionsthreeDownload2(false);
                  setShowinstructionsthreeDownload3(false);
                  setShowinstructionsthreeDownload4(false);
                  setShowinstructionsthreeDownload5(false);
                  setShowinstructionsthreeDownload6(false);
                  setShowinstructionsthreeDownload7(true);
                }}
              >
                <BsDot size={"3rem"} /> instructions ASW S2 3 to 6kw
              </button>
            </div>
          ) : (
            " "
          )}
        </div>
      </div>

      <div className="download-block-b">
        {showbrochuresDownload ||
        showdatasheetshybridDownload1 ||
        showdatasheetshybridDownload2 ||
        showdatasheetshybridDownload3 ||
        showdatasheetshybridDownload4 ||
        showdatasheetssingleDownload1 ||
        showdatasheetssingleDownload2 ||
        showdatasheetssingleDownload3 ||
        showdatasheetssingleDownload4 ||
        showdatasheetsthreeDownload1 ||
        showdatasheetsthreeDownload2 ||
        showdatasheetsthreeDownload3 ||
        showdatasheetsthreeDownload4 ||
        showdatasheetsthreeDownload5 ||
        showdatasheetsthreeDownload6 ||
        showdatasheetsthreeDownload7 ||
        showcertificateshybridDownload1 ||
        showcertificatessingleDownload1 ||
        showcertificatessingleDownload2 ||
        showcertificatesthreeDownload1 ||
        showcertificatesthreeDownload2 ||
        showcertificatesthreeDownload3 ||
        showcertificatesthreeDownload4 ||
        showinstructionshybridDownload1 ||
        showinstructionshybridDownload2 ||
        showinstructionshybridDownload3 ||
        showinstructionssingleDownload1 ||
        showinstructionssingleDownload2 ||
        showinstructionssingleDownload3 ||
        showinstructionsthreeDownload1 ||
        showinstructionsthreeDownload2 ||
        showinstructionsthreeDownload3 ||
        showinstructionsthreeDownload4 ||
        showinstructionsthreeDownload5 ||
        showinstructionsthreeDownload6 ||
        showinstructionsthreeDownload7 ? (
          <motion.div
            initial={{ X: -100, opacity: 0 }}
            animate={{ X: 0, opacity: 1 }}
            exit={{ X: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background: "#eee",
              padding: "4rem",
              borderTop: "0.5px solid darkgray",
            }}
            className="pdf-file-viewer"
          >
            <h6
              style={{
                textAlign: "center",
                marginBottom: "5rem",
                color: "#000",
              }}
            >
              Downloads
            </h6>

            {/* product brochures download area */}

            {showbrochuresDownload ? (
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <>
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={Brochurespdf}
                  >
                    <RiArrowRightSLine /> Product Brochures
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={Brochurespdf}
                    download
                  >
                    <BsDownload />
                  </a>
                </>
              </p>
            ) : (
              " "
            )}

            {/* datasheets download area */}

            {showdatasheetshybridDownload1 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsHybridFirst}
                  >
                    <RiArrowRightSLine /> Datasheets Hybrid Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsHybridFirst}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showdatasheetshybridDownload2 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsHybridSecond}
                  >
                    <RiArrowRightSLine /> Datasheets Hybrid Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsHybridSecond}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showdatasheetshybridDownload3 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsHybridThird1}
                  >
                    <RiArrowRightSLine /> Datasheets Hybrid Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsHybridThird1}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsHybridThird2}
                  >
                    <RiArrowRightSLine /> Datasheets Hybrid Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsHybridThird2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showdatasheetshybridDownload4 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsHybridFourth1}
                  >
                    <RiArrowRightSLine /> Datasheets Hybrid Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsHybridFourth1}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsHybridFourth2}
                  >
                    <RiArrowRightSLine /> Datasheets Hybrid Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsHybridFourth2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showdatasheetssingleDownload1 ? (
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <a
                  style={{
                    fontSize: "1.4rem",
                    display: "flex",
                    alignItems: "center",
                    color: "#000",
                  }}
                  target="_blank"
                  rel="noreferrer noopener"
                  href={datasheetsSingleFirst}
                >
                  <RiArrowRightSLine /> Datasheets Single Inverter
                </a>

                <span style={{ fontSize: "1.4rem" }}>English</span>
                <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                <a
                  style={{ fontSize: "1.8rem", color: "#000" }}
                  href={datasheetsSingleFirst}
                  download
                >
                  <BsDownload />
                </a>
              </p>
            ) : (
              " "
            )}

            {showdatasheetssingleDownload2 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsSingleSecond}
                  >
                    <RiArrowRightSLine /> Datasheets Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsSingleSecond}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsSingleSecond2}
                  >
                    <RiArrowRightSLine /> Datasheets Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsSingleSecond2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showdatasheetssingleDownload3 ? (
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <a
                  style={{
                    fontSize: "1.4rem",
                    display: "flex",
                    alignItems: "center",
                    color: "#000",
                  }}
                  target="_blank"
                  rel="noreferrer noopener"
                  href={datasheetsSingleThird}
                >
                  <RiArrowRightSLine /> Datasheets Single Inverter
                </a>

                <span style={{ fontSize: "1.4rem" }}>English</span>
                <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                <a
                  style={{ fontSize: "1.8rem", color: "#000" }}
                  href={datasheetsSingleThird}
                  download
                >
                  <BsDownload />
                </a>
              </p>
            ) : (
              " "
            )}

            {showdatasheetssingleDownload4 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsSingleFourth}
                  >
                    <RiArrowRightSLine /> Datasheets Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsSingleFourth}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsSingleFourth2}
                  >
                    <RiArrowRightSLine /> Datasheets Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsSingleFourth2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showdatasheetsthreeDownload1 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsThreePhaseFirst}
                  >
                    <RiArrowRightSLine /> Datasheets Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsThreePhaseFirst}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsThreePhaseFirst}
                  >
                    <RiArrowRightSLine /> Datasheets Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsThreePhaseFirst}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showdatasheetsthreeDownload2 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsThreePhaseSecond}
                  >
                    <RiArrowRightSLine /> Datasheets Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsThreePhaseSecond}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsThreePhaseSecond}
                  >
                    <RiArrowRightSLine /> Datasheets Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsThreePhaseSecond}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showdatasheetsthreeDownload3 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsThreePhaseThird1}
                  >
                    <RiArrowRightSLine /> Datasheets Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsThreePhaseThird1}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsThreePhaseThird2}
                  >
                    <RiArrowRightSLine /> Datasheets Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsThreePhaseThird2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsThreePhaseThird3}
                  >
                    <RiArrowRightSLine /> Datasheets Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsThreePhaseThird3}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showdatasheetsthreeDownload4 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsThreePhaseFourth}
                  >
                    <RiArrowRightSLine /> Datasheets Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsThreePhaseFourth}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showdatasheetsthreeDownload5 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsThreePhaseFifth}
                  >
                    <RiArrowRightSLine /> Datasheets Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsThreePhaseFifth}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showdatasheetsthreeDownload6 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsThreePhaseSixth}
                  >
                    <RiArrowRightSLine /> Datasheets Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsThreePhaseSixth}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showdatasheetsthreeDownload7 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={datasheetsThreePhaseSeventh}
                  >
                    <RiArrowRightSLine /> Datasheets Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={datasheetsThreePhaseSeventh}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {/* certificates download area  */}

            {showcertificateshybridDownload1 ? (
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <a
                  style={{
                    fontSize: "1.4rem",
                    display: "flex",
                    alignItems: "center",
                    color: "#000",
                  }}
                  target="_blank"
                  rel="noreferrer noopener"
                  href={certificatesHybridSecond}
                >
                  <RiArrowRightSLine /> certificates Hybrid Inverter
                </a>

                <span style={{ fontSize: "1.4rem" }}>English</span>
                <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                <a
                  style={{ fontSize: "1.8rem", color: "#000" }}
                  href={certificatesHybridSecond}
                  download
                >
                  <BsDownload />
                </a>
              </p>
            ) : (
              " "
            )}

            {showcertificatessingleDownload1 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesSingleFirst1}
                  >
                    <RiArrowRightSLine /> certificates Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesSingleFirst1}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesSingleFirst2}
                  >
                    <RiArrowRightSLine /> certificates Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesSingleFirst2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesSingleFirst3}
                  >
                    <RiArrowRightSLine /> certificates Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesSingleFirst3}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesSingleFirst4}
                  >
                    <RiArrowRightSLine /> certificates Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesSingleFirst4}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesSingleFirst5}
                  >
                    <RiArrowRightSLine /> certificates Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesSingleFirst5}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showcertificatessingleDownload2 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesSingleSecond1}
                  >
                    <RiArrowRightSLine /> certificates Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesSingleSecond1}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesSingleSecond2}
                  >
                    <RiArrowRightSLine /> certificates Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesSingleSecond2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesSingleSecond3}
                  >
                    <RiArrowRightSLine /> certificates Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesSingleSecond3}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesSingleSecond4}
                  >
                    <RiArrowRightSLine /> certificates Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesSingleSecond4}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showcertificatesthreeDownload1 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesThreePhaseFirst}
                  >
                    <RiArrowRightSLine /> certificates Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesThreePhaseFirst}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showcertificatesthreeDownload2 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesThreePhaseSecond}
                  >
                    <RiArrowRightSLine /> certificates Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesThreePhaseSecond}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showcertificatesthreeDownload3 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesThreePhaseThird1}
                  >
                    <RiArrowRightSLine /> certificates Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesThreePhaseThird1}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesThreePhaseThird2}
                  >
                    <RiArrowRightSLine /> certificates Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesThreePhaseThird2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesThreePhaseThird3}
                  >
                    <RiArrowRightSLine /> certificates Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesThreePhaseThird3}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showcertificatesthreeDownload4 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesThreePhaseFourth1}
                  >
                    <RiArrowRightSLine /> certificates Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesThreePhaseFourth1}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesThreePhaseFourth2}
                  >
                    <RiArrowRightSLine /> certificates Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesThreePhaseFourth2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesThreePhaseFourth3}
                  >
                    <RiArrowRightSLine /> certificates Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesThreePhaseFourth3}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesThreePhaseFourth4}
                  >
                    <RiArrowRightSLine /> certificates Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesThreePhaseFourth4}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesThreePhaseFourth5}
                  >
                    <RiArrowRightSLine /> certificates Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesThreePhaseFourth5}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesThreePhaseFourth6}
                  >
                    <RiArrowRightSLine /> certificates Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesThreePhaseFourth6}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesThreePhaseFourth7}
                  >
                    <RiArrowRightSLine /> certificates Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesThreePhaseFourth7}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesThreePhaseFourth8}
                  >
                    <RiArrowRightSLine /> certificates Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesThreePhaseFourth8}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesThreePhaseFourth9}
                  >
                    <RiArrowRightSLine /> certificates Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesThreePhaseFourth9}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={certificatesThreePhaseFourth10}
                  >
                    <RiArrowRightSLine /> certificates Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={certificatesThreePhaseFourth10}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {/* instructions download area */}

            {showinstructionshybridDownload1 ? (
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <a
                  style={{
                    fontSize: "1.4rem",
                    display: "flex",
                    alignItems: "center",
                    color: "#000",
                  }}
                  target="_blank"
                  rel="noreferrer noopener"
                  href={InstructionsHybridFirst}
                >
                  <RiArrowRightSLine /> instructions Hybrid Inverter
                </a>

                <span style={{ fontSize: "1.4rem" }}>English</span>
                <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                <a
                  style={{ fontSize: "1.8rem", color: "#000" }}
                  href={InstructionsHybridFirst}
                  download
                >
                  <BsDownload />
                </a>
              </p>
            ) : (
              " "
            )}

            {showinstructionshybridDownload2 ? (
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <a
                  style={{
                    fontSize: "1.4rem",
                    display: "flex",
                    alignItems: "center",
                    color: "#000",
                  }}
                  target="_blank"
                  rel="noreferrer noopener"
                  href={InstructionsHybridSecond}
                >
                  <RiArrowRightSLine /> instructions Hybrid Inverter
                </a>

                <span style={{ fontSize: "1.4rem" }}>English</span>
                <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                <a
                  style={{ fontSize: "1.8rem", color: "#000" }}
                  href={InstructionsHybridSecond}
                  download
                >
                  <BsDownload />
                </a>
              </p>
            ) : (
              " "
            )}

            {showinstructionshybridDownload3 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsHybridThird1}
                  >
                    <RiArrowRightSLine /> instructions Hybrid Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsHybridThird1}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsHybridThird2}
                  >
                    <RiArrowRightSLine /> instructions Hybrid Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsHybridThird2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsHybridThird3}
                  >
                    <RiArrowRightSLine /> instructions Hybrid Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsHybridThird3}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsHybridThird4}
                  >
                    <RiArrowRightSLine /> instructions Hybrid Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsHybridThird4}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsHybridThird5}
                  >
                    <RiArrowRightSLine /> instructions Hybrid Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsHybridThird5}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showinstructionssingleDownload1 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsSingleFirst1}
                  >
                    <RiArrowRightSLine /> instructions Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsSingleFirst1}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsSingleFirst2}
                  >
                    <RiArrowRightSLine /> instructions Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsSingleFirst2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsSingleFirst3}
                  >
                    <RiArrowRightSLine /> instructions Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsSingleFirst3}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsSingleFirst4}
                  >
                    <RiArrowRightSLine /> instructions Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsSingleFirst4}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showinstructionssingleDownload2 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsSingleSecond1}
                  >
                    <RiArrowRightSLine /> instructions Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsSingleSecond1}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsSingleSecond2}
                  >
                    <RiArrowRightSLine /> instructions Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsSingleSecond2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsSingleSecond3}
                  >
                    <RiArrowRightSLine /> instructions Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsSingleSecond3}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showinstructionssingleDownload3 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsSingleThird1}
                  >
                    <RiArrowRightSLine /> instructions Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsSingleThird1}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsSingleThird2}
                  >
                    <RiArrowRightSLine /> instructions Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsSingleThird2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsSingleThird3}
                  >
                    <RiArrowRightSLine /> instructions Single Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsSingleThird3}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showinstructionsthreeDownload1 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsThreePhaseFirst}
                  >
                    <RiArrowRightSLine /> instructions Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsThreePhaseFirst}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showinstructionsthreeDownload2 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsThreePhaseSecond1}
                  >
                    <RiArrowRightSLine /> instructions Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsThreePhaseSecond1}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsThreePhaseSecond2}
                  >
                    <RiArrowRightSLine /> instructions Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsThreePhaseSecond2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showinstructionsthreeDownload3 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsThreePhaseThird1}
                  >
                    <RiArrowRightSLine /> instructions Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsThreePhaseThird1}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsThreePhaseThird2}
                  >
                    <RiArrowRightSLine /> instructions Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsThreePhaseThird2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsThreePhaseThird3}
                  >
                    <RiArrowRightSLine /> instructions Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsThreePhaseThird3}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showinstructionsthreeDownload4 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsThreePhaseFourth1}
                  >
                    <RiArrowRightSLine /> instructions Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsThreePhaseFourth1}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsThreePhaseFourth2}
                  >
                    <RiArrowRightSLine /> instructions Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsThreePhaseFourth2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsThreePhaseFourth3}
                  >
                    <RiArrowRightSLine /> instructions Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsThreePhaseFourth3}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showinstructionsthreeDownload5 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsThreePhaseFifth1}
                  >
                    <RiArrowRightSLine /> instructions Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsThreePhaseFifth1}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsThreePhaseFifth2}
                  >
                    <RiArrowRightSLine /> instructions Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsThreePhaseFifth2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsThreePhaseFifth3}
                  >
                    <RiArrowRightSLine /> instructions Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsThreePhaseFifth3}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showinstructionsthreeDownload6 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsThreePhaseSixth1}
                  >
                    <RiArrowRightSLine /> instructions Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsThreePhaseSixth1}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsThreePhaseSixth2}
                  >
                    <RiArrowRightSLine /> instructions Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsThreePhaseSixth2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsThreePhaseSixth3}
                  >
                    <RiArrowRightSLine /> instructions Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsThreePhaseSixth3}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}

            {showinstructionsthreeDownload7 ? (
              <>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsThreePhaseSeventh1}
                  >
                    <RiArrowRightSLine /> instructions Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsThreePhaseSeventh1}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsThreePhaseSeventh2}
                  >
                    <RiArrowRightSLine /> instructions Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsThreePhaseSeventh2}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={InstructionsThreePhaseSeventh3}
                  >
                    <RiArrowRightSLine /> instructions Three Inverter
                  </a>

                  <span style={{ fontSize: "1.4rem" }}>English</span>
                  <span style={{ fontSize: "1.4rem" }}>pdf file</span>

                  <a
                    style={{ fontSize: "1.8rem", color: "#000" }}
                    href={InstructionsThreePhaseSeventh3}
                    download
                  >
                    <BsDownload />
                  </a>
                </p>
              </>
            ) : (
              " "
            )}
          </motion.div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}

export default Downloadcenter;
