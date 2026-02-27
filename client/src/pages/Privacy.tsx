export default function Privacy() {
  return (
    <div className="pt-20 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto py-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-slate lg:prose-lg text-slate-700">
            <p>MAYBEL collects limited data for service delivery and optimization. Data may include contact details and usage metrics.</p>
            <p>We use this data to:</p>
            <ul>
              <li>Provide services</li>
              <li>Process payments</li>
              <li>Improve system performance</li>
              <li>Communicate updates</li>
            </ul>
            <p>We apply reasonable security measures to protect data and respect user data rights. Users may request access or deletion of data.</p>
            <p>Contact: <a href="mailto:support@maybel.io" className="text-primary">support@maybel.io</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}