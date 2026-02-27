export default function Terms() {
  return (
    <div className="pt-20 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto py-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
          <div className="prose prose-slate lg:prose-lg text-slate-700">
            <p>By using MAYBEL you agree to the following terms:</p>
            <ul>
              <li>Use of MAYBEL requires compliance with applicable laws.</li>
              <li>Maintain account security and confidentiality.</li>
              <li>Subscriptions are billed monthly or annually as agreed.</li>
              <li>Avoid misuse or unauthorized exploitation of the platform.</li>
            </ul>
            <p>MAYBEL reserves the right to modify or update services and suspend accounts in cases of violation.</p>
            <p>Contact: <a href="mailto:support@maybel.io" className="text-primary">support@maybel.io</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}