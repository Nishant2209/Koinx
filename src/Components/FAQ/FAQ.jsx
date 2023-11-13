import { Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";

const faqArray = [
  {
    question: "How are cryptocurrencies taxed in Australia?",
    answer:
      "The Australian Taxation Office (ATO) regards cryptocurrency as both property, which is subject to Capital Gains Tax (CGT), and income, which is subject to Income Tax. CGT applies when you sell, trade, gift, or make purchases using cryptocurrency. On the other hand, Income Tax applies when you receive cryptocurrency as payment for services, work, mining, staking, or other activities. To simplify tax calculations, consider using a free crypto tax calculator for Australia.",
  },
  {
    question:
      "What’s the difference between long-term and short-term capital gains?",
    answer:
      "The distinction between long-term and short-term capital gains lies in the duration of ownership. When you own an asset, such as cryptocurrency, for more than 12 months, any gains from its sale are categorised as long-term. These long-term gains often receive a 50% discount on the capital gains tax (CGT). In contrast, if you hold the asset for 12 months or less, the gains are considered short-term, and they are taxed at your regular income tax rate.",
  },
  {
    question: "Do I have to pay tax on crypto-to-crypto transactions?",
    answer: `Yes, according to the ATO, when you trade one cryptocurrency for another, like NFTs, stablecoins, or tokens, it's seen as selling one asset to buy another, and any profit you make from this exchange is subject to Capital Gains Tax. To compute taxes for crypto-to-crypto transactions, you must determine the fair market value of your coins in AUD at both the acquisition and disposal times. However, this can be challenging because many exchanges use cryptocurrency as the standard for valuation.

    Explore KoinX for a streamlined experience in calculating your cryptocurrency taxes. Our historical price engine swiftly delivers the fair market value of your crypto holdings at the time of each transaction, making tax assessment hassle-free.
    `,
  },
  {
    question: "Can the ATO track crypto?",
    answer: `The Australian Taxation Office (ATO) possesses strong tracking capabilities for cryptocurrency transactions. Since 2014, they've been gathering data on crypto activities, including KYC info from exchanges and wallets. The ATO's data matching program, active since 2019, lets them access data from service providers like Binance and CoinJar, covering personal details and transaction specifics. Since 2020, the ATO has been notifying Australian crypto investors to report holdings to avoid penalties.`,
  },
  {
    question: "What is the best crypto tax calculator for Australia?",
    answer:
      "KoinX is a crypto tax platform that makes it easy to calculate tax on crypto transactions. It also provides portfolio insights of all crypto exchange accounts combined, making it a valuable tool for chartered accountants and VDA Investors alike.",
  },
  {
    question: "Is using a crypto tax calculator safe?",
    answer:
      "KoinX provides a reliable crypto tax calculator that can assist you in determining your tax obligations for cryptocurrency transactions. This tool accurately tracks your portfolio on your preferred exchange and computes your gains or losses based on the crypto amounts and prices involved.",
  },
  {
    question: "Which exchanges do you support?",
    answer:
      "KoinX seamlessly integrates with a wide array of exchanges, including Binance, CoinSpot, MEXC, Bybit, Coinbase, Kraken, and numerous others. It effortlessly consolidates cryptocurrency transactions from over 180+ chains, exchanges, and wallets, presenting them in a user-friendly unified dashboard.",
  },
  {
    question: "How do I use a cryptocurrency tax calculator?",
    answer:
      "In order to use a cryptocurrency tax calculator, you need to input information about your cryptocurrency transactions. After you enter your information, the cryptocurrency tax calculator will calculate the gain or loss on every transaction. This includes: 1. The financial year you want to calculate your taxes for. 2. The country you want to calculate your taxes for. 3. The purchase price of the coin. 4. The sale price of the coin. You will get results that mention the following: 1. The total profit/loss you made 2. The tax you’re liable to pay",
  },
];

const FAQ = () => {
  const isPhone = useMediaQuery("(max-width:600px)");

  return (
    <Stack className="p-4 bg-white rounded-lg w-full">
      <Typography variant="h4" className="mb-2">
        Frequently Asked Questions
      </Typography>
      <Stack>
        {faqArray.map((question, index) => (
          <Accordion key={index} elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                variant={isPhone ? "body2" : "body1"}
                className="font-bold"
              >
                {`${index + 1}. `}
                {question.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-sm leading-6 text-gray-600">
                {question.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Stack>
  );
};

export default FAQ;
