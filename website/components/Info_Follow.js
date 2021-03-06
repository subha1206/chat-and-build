export default function Info_Follow() {
  return (
    <div className="container mdsm:mx-auto lg:flex mx-auto">
      <div className="flex-1 mdsm:hidden">
        <div className="w-3/5 container mx-auto">
          <img src="/images/follow.png" alt="Vercel Logo" />
        </div>
      </div>
      <div className="lg:flex-1">
        <div className="sm:w-4/5 lg:w-3/5 container mt-28 mx-auto">
          <p className="text-red-600 text-base pb-4 text-center lg:text-left">
            Follow real humans
          </p>
          <h2 className="text-3xl text-center lg:text-left">
            Start following people from live search
          </h2>
          <p className="text-s pt-2 lg:w-3/5 text-center lg:text-left">
            They are connected with you and you will start reciving posts from
            them.
          </p>
        </div>
      </div>
      <div className=" lg:hidden">
        <div className="lg:w-3/5 container mx-auto">
          <img
            src="/images/follow.png"
            alt="Vercel Logo"
            className="mx-auto mt-5 lg:mt-0"
          />
        </div>
      </div>
    </div>
  );
}
