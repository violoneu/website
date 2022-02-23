import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Logo from "../../assets/logo.svg";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="/projets">Projets</a>
    </p>
    <p>
      <a href="/agence">Agence</a>
    </p>
    <p>
      <a href="/contact">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "reli__navbar active" : "reli__navbar"}>
      <div className="reli__navbar-links">
        <div className="reli__navbar-links_logo">
          <a className="reli__navbar-logo" href="/">
            <svg
              className="logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 214 30"
            >
              <path
                className="logo__agence js-logo-agence logo__agence--white"
                d="M0.854868137,2.19499462 C1.03798308,1.99621408 1.3425112,1.89682382 1.76944767,1.89682382 L1.76944767,4.14235046 C1.3713717,4.10190093 1.07380992,3.98286375 0.876762315,3.78408321 C0.678719522,3.58530267 0.580195721,3.31024589 0.580195721,2.95660144 C0.580195721,2.64687363 0.671753193,2.39377516 0.854868137,2.19499462 Z M1.06684359,4.80341131 C1.42809753,4.99988044 1.80826008,5.09927071 2.20832642,5.09927071 C2.81439708,5.09927071 3.34085255,4.87622046 3.78669763,4.42896425 C4.23254271,3.98286375 4.45546525,3.36918663 4.45546525,2.59024429 C4.45546525,2.15570079 4.37684525,1.63216833 4.21960524,1.02311402 L3.60855863,1.02311402 C3.72599104,1.40333958 3.79863991,1.68533057 3.82551003,1.869087 C3.85337535,2.05399912 3.86730801,2.23891125 3.86730801,2.42497908 C3.86730801,2.79018053 3.81058219,3.09066273 3.69613535,3.3275814 C3.5826837,3.56334436 3.4244485,3.75287929 3.22043457,3.89503049 C3.01542544,4.03833738 2.72582518,4.13426055 2.34964339,4.18395568 L2.34964339,1.0046228 L2.11378338,1 C1.4111793,1 0.882733455,1.17219942 0.529441035,1.51775396 C0.176148615,1.86330849 0,2.32558881 0,2.90459491 C0,3.3356713 0.0875767126,3.71011836 0.262730138,4.02909178 C0.437883563,4.3480652 0.70658484,4.60694218 1.06684359,4.80341131 Z M2.20235528,9.50364644 C2.62332062,9.50364644 3.00149278,9.41119037 3.33687179,9.22627824 C3.6712556,9.04136612 3.94194725,8.76630933 4.14695638,8.40110788 C4.35296069,8.03706213 4.45546525,7.63718965 4.45546525,7.20033475 C4.45546525,6.78197107 4.37983082,6.28501973 4.22756676,5.70948073 L3.56078952,5.70948073 C3.74091889,6.13940143 3.83148117,6.55660941 3.83148117,6.96226039 C3.83148117,7.4152951 3.68419307,7.78396366 3.38762647,8.06711035 C3.09205507,8.35025704 2.70492619,8.49240824 2.22623984,8.49240824 C1.78338033,8.49240824 1.40023221,8.36643685 1.07679549,8.11449408 C0.754353956,7.86255131 0.592138,7.48694855 0.592138,6.98884151 C0.592138,6.67333519 0.655830154,6.26537281 0.784209653,5.76495437 L0.137336208,5.76495437 C0.0457787361,6.23416889 0,6.66177819 0,7.04662655 C0,7.88450962 0.209985072,8.50280955 0.629955216,8.90268202 C1.04992536,9.3037102 1.57439045,9.50364644 2.20235528,9.50364644 Z M0.894675734,13.630654 L0.0975286117,13.630654 L0.0975286117,14.5274778 L4.35793664,14.5274778 L4.35793664,13.630654 L1.59727981,13.630654 C1.21214132,13.3301718 0.961353458,13.0516479 0.842925858,12.7950823 C0.725493448,12.537361 0.666777243,12.2992867 0.666777243,12.0773921 C0.666777243,11.9525764 0.692652181,11.8358506 0.743406867,11.7260591 C0.794161552,11.6174232 0.866810416,11.5319013 0.961353458,11.4718049 C1.0558965,11.4105527 1.25095372,11.3805045 1.54552994,11.3805045 L4.35793664,11.3805045 L4.35793664,10.4836807 L1.29474208,10.4836807 C0.889699784,10.4836807 0.572234201,10.6131192 0.343340521,10.8743076 C0.11444684,11.1366517 0,11.4764277 0,11.8947914 C0,12.220699 0.0776248134,12.5338939 0.23386963,12.8355318 C0.389119257,13.1371697 0.609056228,13.4029809 0.894675734,13.630654 Z M0.854868137,16.8388794 C1.03798308,16.6400988 1.3425112,16.5407086 1.76944767,16.5407086 L1.76944767,18.7862352 C1.3713717,18.7457857 1.07380992,18.6267485 0.876762315,18.427968 C0.678719522,18.2303431 0.580195721,17.9529749 0.580195721,17.6004862 C0.580195721,17.2907584 0.671753193,17.0376599 0.854868137,16.8388794 Z M1.06684359,19.4461404 C1.42809753,19.6437652 1.80826008,19.7419998 2.20832642,19.7419998 C2.81439708,19.7419998 3.34085255,19.5201052 3.78669763,19.072849 C4.23254271,18.6267485 4.45546525,18.0130714 4.45546525,17.234129 C4.45546525,16.7984298 4.37684525,16.2772088 4.21960524,15.6658431 L3.60855863,15.6658431 C3.72599104,16.0472243 3.79863991,16.3292153 3.82551003,16.5141274 C3.85337535,16.6978839 3.86730801,16.882796 3.86730801,17.0677081 C3.86730801,17.4329096 3.81058219,17.7345475 3.69613535,17.9714661 C3.5826837,18.2072291 3.4244485,18.396764 3.22043457,18.5389152 C3.01542544,18.6822221 2.72582518,18.7781453 2.34964339,18.8266847 L2.34964339,15.6485076 L2.11378338,15.6438847 C1.4111793,15.6438847 0.882733455,15.8160842 0.529441035,16.1616387 C0.176148615,16.5071932 0,16.9683179 0,17.547324 C0,17.9795561 0.0875767126,18.3540031 0.262730138,18.6741322 C0.437883563,18.9919499 0.70658484,19.2508269 1.06684359,19.4461404 Z M3.40852546,22.301877 C3.52595787,22.5503527 3.58467408,22.808074 3.58467408,23.0727294 C3.58467408,23.4841589 3.45529939,23.7788626 3.19854039,23.9614634 C2.93979101,24.1429084 2.6054072,24.2342087 2.19439376,24.2342087 C1.67092387,24.2342087 1.27085752,24.1117045 0.995189915,23.8666959 C0.718527119,23.6216873 0.580195721,23.2969354 0.580195721,22.8924401 C0.580195721,22.6555215 0.624979267,22.4278484 0.712555979,22.2105767 C0.799137502,21.9933049 0.932492951,21.7841231 1.11063195,21.5830311 L2.88207,21.5830311 C3.11494444,21.8141713 3.29009786,22.054557 3.40852546,22.301877 Z M5.7730967,21.7760332 C5.62182783,21.4015861 5.37900149,21.1265293 5.04760325,20.9497071 C4.71520982,20.7740406 4.09819207,20.6862073 3.19655001,20.6862073 L0.0975286117,20.6862073 L0.0975286117,21.5830311 L0.580195721,21.5830311 C0.413003815,21.7552305 0.292585835,21.9100944 0.219936971,22.0499342 C0.146292918,22.189774 0.0915574722,22.3400151 0.0547354453,22.5018133 C0.0179134185,22.6624557 0,22.8358108 0,23.0230343 C0,23.4437094 0.0895670924,23.8170008 0.266710897,24.1440641 C0.444849892,24.4699717 0.7105656,24.7265373 1.06186764,24.9102937 C1.41416487,25.0940501 1.79233704,25.1853505 2.19837452,25.1853505 C2.73179632,25.1853505 3.20948748,25.0304866 3.62945762,24.7172917 C4.04942777,24.4040968 4.25941284,23.904834 4.25941284,23.2206591 C4.25941284,22.8207867 4.16885056,22.4786992 3.98872118,22.1990196 C3.80759662,21.9204958 3.60059711,21.714781 3.3647371,21.5830311 L4.03549511,21.5830311 C4.45944601,21.5830311 4.7958202,21.6951341 5.04561287,21.9170287 C5.29540554,22.1412346 5.41980428,22.5387957 5.41980428,23.113179 C5.41980428,23.6274658 5.31431415,24.1463755 5.1023387,24.6710636 L5.7730967,24.7762324 C5.84375518,24.5277567 5.8915243,24.3278205 5.91640405,24.1764237 C5.94128379,24.0250269 5.96118759,23.8528275 5.97711063,23.6586697 C5.99303367,23.464512 6,23.283067 6,23.1143347 C6,22.5977364 5.92436557,22.1504802 5.7730967,21.7760332 Z M3.82351966,28.3034312 C3.82351966,28.5172359 3.7598275,28.7033037 3.631448,28.8639461 C3.50406369,29.0234328 3.34682369,29.1031762 3.16072317,29.1031762 C2.89202189,29.1031762 2.67905125,28.9402224 2.52181125,28.6143147 C2.36556643,28.2895628 2.28694643,27.8862232 2.28694643,27.4054517 L2.29391276,27.1130594 L3.39658318,27.1130594 C3.53790015,27.3176185 3.64438547,27.5187104 3.71603914,27.7174909 C3.78769282,27.9162715 3.82351966,28.1115849 3.82351966,28.3034312 Z M4.45546525,26.1792532 C4.45546525,25.9330889 4.41366727,25.708883 4.33007132,25.5054796 L3.90213966,25.5690432 C3.91308675,25.6453194 3.9180627,25.7031045 3.9180627,25.7423983 C3.9180627,25.83601 3.8981589,25.9192205 3.85934649,25.9908739 C3.82053409,26.0613717 3.76281307,26.1168453 3.68817383,26.1561392 C3.61353458,26.195433 3.46923205,26.2150799 3.25427102,26.2150799 L1.3226074,26.2150799 C0.94344004,26.2150799 0.668767623,26.2890448 0.496599768,26.4369745 C0.325427102,26.5837485 0.199037983,26.782529 0.11942279,27.029849 C0.0398075966,27.2771689 0,27.5476029 0,27.8434623 C0,28.3843303 0.106485321,28.961025 0.318460773,29.5723907 L0.957372699,29.5723907 C0.70658484,29.0141872 0.580195721,28.4987447 0.580195721,28.0249073 C0.580195721,27.821504 0.607065848,27.6504603 0.658815724,27.5140876 C0.71156079,27.3765592 0.784209653,27.2748575 0.877757505,27.2101383 C0.970310168,27.145419 1.11958865,27.1130594 1.32459778,27.1130594 L1.83911096,27.1130594 L1.83911096,27.3257084 C1.83911096,28.2583589 1.97644717,28.937911 2.24912921,29.3632089 C2.52280644,29.7885068 2.86813734,30 3.2861171,30 C3.66827003,30 3.95886548,29.8474475 4.15690828,29.5434982 C4.35594626,29.2383932 4.45546525,28.9090185 4.45546525,28.555374 C4.45546525,28.3034312 4.401725,28.0445543 4.29424448,27.7810545 C4.18775916,27.5187104 4.02852878,27.2517435 3.81655333,26.9801538 C4.05937966,26.9142789 4.22657157,26.8044873 4.31812904,26.6530905 C4.40968652,26.500538 4.45546525,26.342207 4.45546525,26.1792532 L4.45546525,26.1792532 Z"
              ></path>
              <path
                className="logo__relief js-logo-relief logo__relief--white"
                d="M102,3.97034477 L102,1 L86.2233075,1 L86.2233075,29 L90.1674807,29 L90.1674807,16.2860243 L100.122301,16.2860243 L100.122301,13.3539339 L90.1674807,13.3539339 L90.1674807,3.97034477 L102,3.97034477 Z M72.7811724,15.8888532 L82.5293454,15.8888532 L82.5293454,12.9567628 L72.7811724,12.9567628 L72.7811724,3.97034477 L84.4070443,3.97034477 L84.4070443,1 L68.8369993,1 L68.8369993,29 L85.2157618,29 L85.2157618,26.0296552 L72.7811724,26.0296552 L72.7811724,15.8888532 Z M63.3144867,29 L67.2586598,29 L67.2586598,1.00112513 L63.3144867,1.00112513 L63.3144867,29 Z M49.4221953,1 L45.4769052,1 L45.4769052,29 L61.7607215,29 L61.7607215,26.0296552 L49.4221953,26.0296552 L49.4221953,1 Z M32.4201395,15.8888532 L42.1671955,15.8888532 L42.1671955,12.9567628 L32.4201395,12.9567628 L32.4201395,3.97034477 L44.0460114,3.97034477 L44.0460114,1 L28.4759664,1 L28.4759664,29 L44.8536119,29 L44.8536119,26.0296552 L32.4201395,26.0296552 L32.4201395,15.8888532 Z M13.1840576,14.1865306 L11.9061947,14.1865306 L11.9061947,3.97034477 L14.3859637,3.97034477 C16.1631314,3.97034477 17.4566326,4.15374106 18.264233,4.5194085 C19.0718334,4.88507595 19.6660844,5.39250984 20.0481029,6.0417102 C20.4301213,6.69203568 20.6211306,7.45149883 20.6211306,8.32234992 C20.6211306,9.78501969 20.1106556,11.1284256 19.0908227,12.3514426 C18.0698727,13.5755847 16.1005787,14.1865306 13.1840576,14.1865306 Z M22.2363314,13.845616 C23.0126555,13.0388974 23.6102575,12.1174154 24.0302544,11.0834204 C24.4502513,10.0494254 24.6591328,9.00305393 24.6591328,7.9431809 C24.6591328,6.12722012 24.0648818,4.51603311 22.8752629,3.10961987 C21.685644,1.70320662 19.5320428,1 16.4144594,1 L8,1 L8,29 L11.9061947,29 L11.9061947,17.1568754 L15.5878697,17.1568754 L23.5041413,29 L28.3486269,29 L19.0628973,15.8888532 C20.402196,15.3341638 21.4600074,14.6534598 22.2363314,13.845616 L22.2363314,13.845616 Z"
              ></path>
              <path
                className="logo__design js-logo-design logo__design--white"
                d="M210.591127,0.71403972 L210.591127,22.7585811 L196.616313,0.71403972 L192.719178,0.71403972 L192.719178,29.2848123 L196.128052,29.2848123 L196.128052,7.24715876 L210.121903,29.2848123 L214,29.2848123 L214,0.71403972 L210.591127,0.71403972 Z M187.234072,26.2541614 C186.155641,26.5893698 185.334779,26.7914132 184.771486,26.8614396 C184.207073,26.9337619 183.604585,26.9682011 182.965142,26.9682011 C180.444322,26.9682011 178.438642,26.3827345 176.94586,25.2118012 C175.454197,24.0420158 174.391444,22.5634256 173.75872,20.7817702 C173.124875,18.9989668 172.809073,17.0784066 172.809073,15.0189416 C172.809073,11.6978533 173.554904,8.87039376 175.047686,6.53426702 C176.540468,4.19814028 178.960499,3.0306509 182.3089,3.0306509 C183.249588,3.0306509 184.250748,3.11789691 185.310142,3.29124096 C186.369536,3.46458501 188.311384,4.04660774 191.132327,5.03845712 L191.132327,1.29261853 C188.071733,0.431638159 185.143282,0 182.345855,0 C177.716328,0 174.270499,1.40282402 172.005009,4.20847205 C169.741759,7.01412008 168.609574,10.6107221 168.609574,14.999426 C168.609574,17.8705086 169.107914,20.4695213 170.106835,22.7976122 C171.104636,25.1279991 172.560463,26.9108024 174.475434,28.1460223 C176.389286,29.3823901 179.017612,30 182.357054,30 C183.56315,30 184.726692,29.9311216 185.851037,29.7968086 C186.973144,29.6613477 188.752611,29.2343015 191.189441,28.5133739 L191.189441,16.9498335 L187.234072,16.9498335 L187.234072,26.2541614 Z M163.745994,29.2848123 L167.701362,29.2848123 L167.701362,0.71403972 L163.745994,0.71403972 L163.745994,29.2848123 Z M156.461263,13.2809092 L154.456702,12.1237516 C153.372671,11.492366 152.519333,10.9493744 151.897807,10.4913328 C151.277401,10.0355872 150.78242,9.48800367 150.413984,8.8508782 C150.046668,8.21375273 149.86301,7.58581104 149.86301,6.96820113 C149.86301,6.06818965 150.251603,5.18654575 151.028791,4.3244174 C151.804858,3.46228906 153.003115,3.0306509 154.621322,3.0306509 C155.39179,3.0306509 156.165618,3.11789691 156.942805,3.29124096 C157.719993,3.46573298 159.152302,3.97084146 161.236373,4.80886236 L161.236373,1.09975893 C158.838739,0.366203651 156.562051,0 154.404068,0 C152.613402,0 151.127339,0.335208357 149.947,1.00332912 C148.76778,1.67259786 147.827093,2.60016072 147.127176,3.78372173 C146.42614,4.96728275 146.077861,6.23464585 146.077861,7.58581104 C146.077861,9.0919527 146.517969,10.4626335 147.401543,11.6978533 C148.283998,12.9342211 150.011952,14.298014 152.584285,15.79038 L154.513815,16.930318 C156.467982,18.0622202 157.695356,19.0207783 158.192576,19.8059924 C158.677478,20.6038342 158.920489,21.4728504 158.920489,22.411893 C158.920489,23.6608885 158.456865,24.7319481 157.528496,25.6262197 C156.600126,26.5216393 155.334677,26.9682011 153.731028,26.9682011 C152.847454,26.9682011 151.886608,26.8591436 150.851852,26.6398806 C149.815975,26.4217656 148.174251,25.7834921 145.926679,24.7273562 L145.926679,28.7441166 C147.880846,29.3100677 149.324354,29.6613477 150.257203,29.7968086 C151.191171,29.9311216 152.156496,30 153.152058,30 C156.380632,30 158.824181,29.1826426 160.481583,27.5467799 C162.141225,25.9132132 162.969926,23.9834692 162.969926,21.755252 C162.969926,20.1216852 162.534298,18.6740902 161.664162,17.412467 C160.794026,16.1646194 159.060473,14.7870509 156.461263,13.2809092 Z M132.986623,15.9063253 L142.760817,15.9063253 L142.760817,12.9147055 L132.986623,12.9147055 L132.986623,3.74469062 L144.644432,3.74469062 L144.644432,0.71403972 L129.031254,0.71403972 L129.031254,29.2848123 L145.452976,29.2848123 L145.452976,26.2541614 L132.986623,26.2541614 L132.986623,15.9063253 Z M121.987295,20.9068993 C121.248183,22.7597291 120.224625,24.1143382 118.916621,24.9707267 C117.607497,25.8259672 115.637652,26.2541614 113.008206,26.2541614 L107.954248,26.2541614 L107.954248,3.74469062 L111.204101,3.74469062 C114.999328,3.74469062 117.610857,4.24405924 119.037566,5.24050052 C120.466516,6.23923775 121.499033,7.56399954 122.137357,9.21708185 C122.775681,10.8713121 123.095962,12.7023304 123.095962,14.7101366 C123.095962,16.9877167 122.726406,19.0540696 121.987295,20.9068993 Z M121.387046,2.30627942 C119.543746,1.2455516 116.833669,0.71403972 113.257936,0.71403972 L104,0.71403972 L104,29.2848123 L113.313929,29.2848123 C116.801193,29.2848123 119.523588,28.6029159 121.481115,27.2391229 C123.437522,25.8741821 124.896708,24.0603834 125.855313,21.7942831 C126.816159,19.5304787 127.295461,17.0393755 127.295461,14.3244174 C127.295461,11.4544828 126.772484,8.99896682 125.724289,6.95901733 C124.677214,4.91906785 123.231466,3.36815521 121.387046,2.30627942 L121.387046,2.30627942 Z"
              ></path>
            </svg>
          </a>
          {/* <h1 href="/home">Relief</h1> */}
        </div>
        <div className="reli__navbar-links_container">
          <Menu />
        </div>
        <div className="reli__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#00000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#00000"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="reli__navbar-menu_container scale-up-center">
              <div className="reli__navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
