import React from "react";
import PrimaryButton from "../../../Components/Button/PrimaryButton";

const EditRole = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <form class="xl:w-12/12 w-full px-8">
          <div class="bg-gray-100 py-12 px-10 flex flex-wrap items-center justify-start">
            <div class="w-full h-full relative md:mt-0 mt-4">
              {/* <img
                src="https://i.ibb.co/DwNs7zG/Steps.png"
                alt="step1"
                class="w-full h-full"
              /> */}
              <div class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                <p class="w-full text-2xl font-semibold leading-4 text-gray-800 flex items-center">
                  <FcAddDatabase></FcAddDatabase>{" "}
                  <span className="ml-4">Add New Role</span>
                </p>
                {/* <p class="w-full text-xs mt-1 leading-none text-white">
                  description of step 1
                </p> */}
              </div>
            </div>
          </div>
          <div class="xl:px-24 mb-10">
            <div class="mt-16 mb-8 lg:flex justify-between border-b border-gray-200 pb-16">
              <div class="w-80">
                <div class="flex items-center">
                  <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">
                    Please enter role name to edit
                  </h1>
                </div>
                <p class="mt-4 text-sm leading-5 text-gray-600">
                  Information about the section could go here and a brief
                  description of how this might be used.
                </p>
              </div>
              <div>
                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div class="md:w-96">
                    <label
                      class="text-sm font-medium leading-none text-gray-800"
                      id="roleName"
                    ></label>
                    <input
                      type="name"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-emerald-500 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="roleName"
                      placeholder="Admin / Moderator / ..."
                    />
                  </div>
                  {/* <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      class="text-sm font-medium leading-none text-gray-800"
                      id="lastName"
                    >
                      Last name
                    </label>
                    <input
                      type="name"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-emerald-500 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="lastName"
                      placeholder="Doe"
                    />
                  </div> */}
                </div>
              </div>
            </div>

            {/* Submit and Reset button */}
            <div className="">
              <PrimaryButton
                onKeyDown={(e) => (e.key === "Enter" ? handleSubmit() : "")}
                type="submit"
                classes="w-40 px-8 py-3 font-semibold rounded-md "
              >
                {/* {loading ? <SmallSpinner /> : "Sign in"} */}
                Submit
              </PrimaryButton>
              <button
                type="reset"
                className="ml-4 w-36 px-8 py-3 font-semibold rounded-md ring-2 ring-emerald-500 text-emerald-500 hover:ring-lime-500 hover:text-lime-500"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditRole;
