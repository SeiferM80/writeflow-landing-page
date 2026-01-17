import Head from 'next/head';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>WriteFlow - AI Writing Assistant</title>
        <meta name="description" content="WriteFlow helps you craft perfect content effortlessly with AI." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold text-gray-800">WriteFlow</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#features" className="text-gray-600 hover:text-gray-800">Features</a></li>
                <li><a href="#pricing" className="text-gray-600 hover:text-gray-800">Pricing</a></li>
                <li><a href="#testimonials" className="text-gray-600 hover:text-gray-800">Testimonials</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold">Effortless Content Creation with AI</h2>
            <p className="mt-4 text-lg">WriteFlow empowers you to craft perfect content in seconds, saving time and boosting productivity.</p>
            <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow hover:bg-gray-100">
              Get Started for Free
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-gray-800 text-center">Features</h3>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold text-gray-800">AI-Powered Suggestions</h4>
                <p className="mt-2 text-gray-600">Get intelligent recommendations to enhance your writing.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold text-gray-800">Customizable Templates</h4>
                <p className="mt-2 text-gray-600">Choose from a variety of templates tailored to your needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold text-gray-800">Real-Time Collaboration</h4>
                <p className="mt-2 text-gray-600">Work with your team seamlessly in real-time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-gray-800 text-center">What Our Users Say</h3>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-gray-600">"WriteFlow has transformed the way I create content. It's fast, intuitive, and incredibly powerful."</p>
                <h4 className="mt-4 text-xl font-semibold text-gray-800">- Alex Johnson</h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-gray-600">"I can't imagine going back to manual writing. WriteFlow is a game-changer!"</p>
                <h4 className="mt-4 text-xl font-semibold text-gray-800">- Sarah Lee</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-gray-800 text-center">Pricing Plans</h3>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold text-gray-800">Free</h4>
                <p className="mt-2 text-gray-600">Basic features for personal use.</p>
                <p className="mt-4 text-2xl font-bold text-gray-800">$0/month</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold text-gray-800">Pro</h4>
                <p className="mt-2 text-gray-600">Advanced features for professionals.</p>
                <p className="mt-4 text-2xl font-bold text-gray-800">$15/month</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold text-gray-800">Enterprise</h4>
                <p className="mt-2 text-gray-600">Custom solutions for businesses.</p>
                <p className="mt-4 text-2xl font-bold text-gray-800">Contact us</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold">Start Writing Smarter Today</h3>
            <p className="mt-4 text-lg">Sign up now and experience the power of AI-assisted writing.</p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700">
              Join WriteFlow
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">&copy; 2023 WriteFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
