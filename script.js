"use strict";

const signUpBtn = document.querySelector(".signup-btn");
const signInBtn = document.querySelector(".signin-btn");
const signUpBtn1 = document.querySelector(".signup-btn1");
const menuBtn1 = document.querySelector(".menu-btn1");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn");
const formsWrapper = document.querySelector(".forms-wrapper");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.add("change");
  formsWrapper.classList.remove("change1");
  formsWrapper.classList.remove("change2");
  formsWrapper.classList.remove("change3");
});

signUpBtn1.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.add("change");
  formsWrapper.classList.remove("change1");
  formsWrapper.classList.remove("change2");
  formsWrapper.classList.remove("change3");
});

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.remove("change");
  formsWrapper.classList.remove("change1");
  formsWrapper.classList.remove("change2");
});

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.add("change1");
  formsWrapper.classList.remove("change");
  formsWrapper.classList.remove("change2");
});

menuBtn1.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.add("change1");
  formsWrapper.classList.remove("change");
  formsWrapper.classList.remove("change2");
});

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.add("change2");
  formsWrapper.classList.remove("change");
  formsWrapper.classList.remove("change1");
});
