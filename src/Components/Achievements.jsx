import React from 'react';

const Achievements = () => {
  return (
    <section id="achievements" className="p-4 sm:p-8 bg-gray-50 shadow-lg rounded-lg">
      <h2 className="text-4xl text-center font-bold mb-6 text-blue-600">Achievements</h2>

      <div>
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Competitive Rankings</h3>
        <ul className="list-disc list-inside mb-6">
            <li className="mb-1">🥇 <strong>Ranked 81st</strong> in Codechef October Challenge 2021</li>
            <li className="mb-1">🥈 <strong>Ranked 127th</strong> in ICPC Asia Regional 2021 Onsite Round</li>
            <li className="mb-1">🥈 <strong>Ranked 131st</strong> in ICPC Asia Dhaka Regional 2022 Onsite Round</li>
            <li className="mb-1">🏆 <strong>Ranked 268th</strong> (out of 1700+ teams) in ICPC Asia Dhaka Regional online prelim 2021, qualified for Onsite Round</li>
            <li className="mb-1">🏆 <strong>Ranked 398th</strong> (out of 1600+ teams) in ICPC Asia Dhaka Regional online prelim 2022, qualified for Onsite Round</li>
            <li className="mb-1">🥉 <strong>Ranked 4th</strong> in Intra University LFR competition</li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold mb-2 text-gray-800">Online Contests</h3>
      <table className="min-w-full border-collapse border border-gray-300 rounded-lg overflow-hidden shadow">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="border border-gray-300 p-3">Contest Title</th>
            <th className="border border-gray-300 p-3">Rank</th>
            <th className="border border-gray-300 p-3">Registered Participants</th>
            <th className="border border-gray-300 p-3">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-blue-100 transition-colors">
            <td className="border border-gray-300 p-3">ICPC Asia Dhaka Regional 2023 Preliminary</td>
            <td className="border border-gray-300 p-3">202</td>
            <td className="border border-gray-300 p-3">2400+</td>
            <td className="border border-gray-300 p-3">✅ <strong>Qualified to Regional Round</strong></td>
          </tr>
          <tr className="hover:bg-blue-100 transition-colors">
            <td className="border border-gray-300 p-3">Codechef October Challenge 2021</td>
            <td className="border border-gray-300 p-3">81</td>
            <td className="border border-gray-300 p-3">20000+</td>
            <td className="border border-gray-300 p-3">💹 <strong>Rating increased 80+</strong></td>
          </tr>
          <tr className="hover:bg-blue-100 transition-colors">
            <td className="border border-gray-300 p-3">Codeforces Round 773 (Div. 2)</td>
            <td className="border border-gray-300 p-3">3428</td>
            <td className="border border-gray-300 p-3">8500+</td>
            <td className="border border-gray-300 p-3">💹 <strong>Rating increased 150+</strong></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Achievements;
