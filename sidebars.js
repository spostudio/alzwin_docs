/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  guideSidebar: [{ type: "autogenerated", dirName: "guide" }],
  // guideSidebar: [
  //   "guide/introduce",
  //   "guide/alzwin_guest",
  //   "guide/jadey2",
  //   {
  //     type: "category",
  //     label: "고객",
  //     collapsed: true,
  //     collapsible: true,
  //     description: "customer",
  //     items: [
  //       "guide/customer/add_customer",
  //       "guide/customer/start_ai_call",
  //       "guide/customer/send_message",
  //     ],
  //     link: {
  //       type: "doc",
  //       id: "guide/customer/customer",
  //     },
  //   },
  // ],
  apiSidebar: ["api/introduce", "api/authentication", "api/upload_voice"],
};

module.exports = sidebars;
