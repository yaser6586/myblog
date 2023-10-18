import React from "react";
import Image from "next/image";

function SideBar() {
  return (
    <div className="min-h-full basis-1/4 bg-base-200   flex flex-col     ">
      <Image
        src="/mypic.jpg"
        className="rounded-full m-auto mt-10"
        height={200}
        width={200}
        alt="my pic"
      />
      <p className="text-center mx-10 mt-8 ">
        My name is <b>Yaser Hoseini</b> I&lsquo;m computer engineer and my main
        skill is front end development, this weblog is my Portfolio . this
        weblog is fullstack app and developed by me with Next js and is
        connected to mongodb database and you can get blog page to add new post
        to weblog after that in home page see the post by clicking read button
        you redirect to dynamic page which is contained the post detail like
        body of post , you will be able to edit and delete each post in detail
        page . I&lsquo;ve added REST api to app and deploy with Vercel you can toggle
        between dark and light theme in navbar which use the Context api . this
        web site use DaisyUi and Tailwind for styling and better appearance its
        completely responsive , last but not least ,this website has server side
        pagination and home page only shows 3 post per page but you can see
        other pages with nice designed pagination in bottom of page
      </p>
    </div>
  );
}

export default SideBar;
