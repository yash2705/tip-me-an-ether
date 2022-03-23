import React from "react";
import Accordian from "../components/Accordian";
import HomeHeader from "../components/HomeHeader";
import LoginHeader from "../components/LoginHeader";
import Footer from "../components/Footer";
import BottomNavigationBar from "../components/BottomNavigationBar";
import { useMoralis } from "react-moralis";
import Sidebar from "../components/Sidebar";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "How do I get paid?",
      answer: "You get paid directly to your web3 Metamask wallet in Ether.",
    },
    {
      id: 2,
      question: "How can my audience pay?",
      answer:
        "Users can pay directly from their web3 Metamask wallets in Ether.",
    },
    {
      id: 3,
      question: "Is there a fee to use Tip Me An Ether?",
      answer:
        "We do not charge a monthly fee. All features including publishing and emails are free for everyone. We charge 0% transaction fee, which means creators keep 100% of their earnings.",
    },
    {
      id: 4,
      question: "Can I get myself featured as a Content Creator?",
      answer:
        "Yes, Tip Me An Ether can help you as content creators to further your reach by promoting your work on our platform. In return, we charge between 5$-15$ in Eth depending on the number of requests.",
    },
    {
      id: 5,
      question: "Can I get a refund for my donation?",
      answer:
        "Because Tip Me An Ether is built on the Ethereum blockchain and the platform does not process the payments or take a cut of donations it is not possible for Tip Me An Ether to provide refunds. To request a refund for any reason please contact the Creator you donated to.",
    },
    {
      id: 6,
      question: "When Will The Creator Receive My Money?",
      answer:
        "The funds are transferred to the Creator immediately via the Ethereum blockchain, no waiting for payout dates or minimum balances.",
    },
    {
      id: 7,
      question: "How is this different from other platforms for creators?",
      answer:
        "Tip Me An Ether is a decentralized web app (dApp) that is developed on the ethereum blockchain and hence, users and creators dont have to go through the hassle of logging in with their mobile numbers/ email ids. Moreover, neither do the users, nor do the content creators need to link their bank accounts or credit cards on our website. We take 0% comissions on all transactions made through our app which means creators keep all the money they earn!",
    },
  ];

  const { isAuthenticated } = useMoralis();
  return (
    <div className="bg-slate-100 min-h-screen overflow-x-hidden flex flex-col overflow-y-hidden">
      {isAuthenticated ? <HomeHeader /> : <LoginHeader />}
      <div
        className={` ${
          isAuthenticated ? "pt-20" : "pt-4"
        } flex w-full md:max-w-4xl mx-auto flex-1 lg:max-w-6xl`}
      >
        {isAuthenticated ? <Sidebar selectedOption="FAQ" /> : null}
        <div
          className={`md:w-2/3 lg:w-4/5 xl:w-7/12 flex flex-col flex-1 ${
            isAuthenticated
              ? "overflow-y-scroll overscroll-contain md:h-[600px] scrollbar-hide pb-16 md:pb-0"
              : ""
          }`}
        >
          {faqs.map((faq) => {
            return (
              <Accordian
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            );
          })}
        </div>
      </div>
      {isAuthenticated ? <BottomNavigationBar /> : <Footer />}
    </div>
  );
};

export default FAQ;
