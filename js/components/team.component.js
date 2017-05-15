(function () {
  'use strict'

  angular.module('app')
    .component('team', {
      templateUrl: '/js/templates/team.html',
      controller: TeamController
    })

  function TeamController() {
    const vm = this

    vm.$onInit = function () {
    }

    vm.members = [
      {name: "Kenneth Acampora", title: "CRC, CRPC, President", bio: "DURABLE Wealth Management, LLC has over twenty (20) years of experience in the financial services industry including 8 years as an advisor to the public and 13 years as a Retirement and Mutual Fund Specialist where he taught other financial advisors in the Southwest the finer techniques of retirement planning and distribution.  In 2014 Ken was named a prestigious FiveStar Professionals Wealth Manager* of the Year and noted in Denver’s 5280 Magazine.  Ken has served as a keynote and featured speaker to legal, accounting and financial professionals, speaking on topics as varied as How to Make Money in the Capital Markets, IRA Distribution Strategies, Use of Annuities in Estate Planning and others.  Ken was certified to teach state required Continued Education courses for Accountants and Financial Advisors in 6 (six) states.  Kenneth holds board certifications in Retirement Consulting from the College of Financial Planning as well as the International Foundation for Retirement Education.As an Investment Advisor Representative (IAR) with Western Wealth Management, LLC and a registered representative with LPL Financial, a registered broker/dealer, member FINRA/SIPC, Ken is able to serve clients coast to coast.  When not in the office, Ken serves the community as the Treasurer for the Boy Scouts of America -Troop 316.  Ken teaches and mentors the youth of his community in Fly Fishing, Fly Tying and NRA safety.  Ken, his wife Heather and two children make their home in Castle Rock, Colorado. *Award based on 10 objective criteria associated with providing quality services to clients such as credentials, experience, and assets under management among other factors.  Wealth managers do not pay a fee to be considered or placed on the final list of Five Start Wealth managers.", image: "/assets/images/people/KA.png"},

      {name: "Holly Jones", title: "Administrative Assistant", bio: "Holly has been involved in the financial industry for over twenty five (25) years.  Jobs including personal/business banker, investments and mortgages.  She currently holds her insurance license and is a notary public.  Holly joined DURABLE Wealth Management in 2015. Mother of three grown children, she is now enjoying the empty nest and the great outdoors.", image: "/assets/images/people/HJ.png"}
    ]

    vm.partners = [
      {name: "Seth G. Baker", bio: "The founder of Baker Certified Public Accountants, LLC, a full-service accounting firm.  Licensed as a Certified Public Accountant in Colorado and has many years of public accounting experience.  Mr. Baker has expertise in many areas of accounting, with a focus on federal and state tax compliance, strategic tax planning and optimization, and taxpayer defense and representation. Seth received his Bachelor of Science in Business and Finance from Brigham Young University-Idaho.  He receive a Masters Degree in Taxation (MT) from the University of Denver, Sturm College of Law and Daniels College of Business. Memberships and Affiliations: The American Institute of Certified Public Accountants (AICPA) Colorado Society of Certified Public Accountants (CSCPA). Mr. Baker is not affiliated with DURABLE Wealth Management, Western Wealth Management or LPL Financial"},

      {name: "LPL Financial", bio: "We at DURABLE Wealth Management have chosen to work with LPL Financial, the country’s largest provider of broker-dealer services to independent financial advisers.  With thousands of affiliated financial advisers in all 50 states and over $126 billion invested and managed annually, LPL has been America’s top independent broker-dealer for the past 19 years.†  For clients of DURABLE Wealth Management, LPL is a strong partner.  LPL provides us with world-class technical and back office support.  The LPL Financial SIPC Membership provides account protection up to a maximum of $500,000 per customer, of which $250,000 may be claims for cash.  An explanatory brochure is available at www.sipc.org  Additionally, through London Insurers, LPL Financial accounts have additional securities protection to cover the net equity of customer accounts up to an overall aggregate firm limit of $575,000,000 subject to conditions and limitations.  The account protection applies when an SIPC member firm fails financially and is unable to meet obligations to securities clients, but it does not protect against losses from the rise and fall in the market value of investments.  Additionally, securities are offered through LPL Financial.  Fee based advisory services offered through Western Wealth Management, LLC a Registered Investment Advisor.  DURABLE Wealth Management and Western Management are separate entities from LPL Financial.  †As reported in Financial Planning Magazine June 1996-2015, based on total revenues"}
    ]
  }
}())
