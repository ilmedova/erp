import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-100 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-zinc-700 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">You're logged in!</div>
                    </div>
                </div>
            </div> */}

            <main className="pt-8 max-h-screen overflow-auto">
                <div className="px-6 py-2">
                    <div className="max-w-7xl mx-auto">
                        <div class="bg-blue-100 mb-10 p-6 rounded-lg shadow">
                            <div class="md:flex">
                                <div class="md:w-1/2">
                                    <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-2 leading-tight">Hello Mahri!</h2>

                                    <p class="text-gray-700 mb-4">How are you feeling today?</p>
                                </div>
                                <div class="md:w-1/2">

                                    <svg class="w-64 h-48 object-cover mx-auto" id="f61e7f2c-3df8-44b9-b514-d2b672d0e0d5" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100.99998 666.0509">
                                        <title>dev_focus</title>
                                        <circle cx="633.92942" cy="214.02012" r="36.39575" fill="#2f2e41"></circle>
                                        <path d="M693.56939,295.60077a36.40082,36.40082,0,0,1,32.03938,53.66882,36.38708,36.38708,0,1,0-60.45438-39.98247A36.306,36.306,0,0,1,693.56939,295.60077Z" transform="translate(-49.50001 -116.97455)" fill="#2f2e41"></path>
                                        <circle cx="565.91872" cy="107.03051" r="106.9125" fill="#2f2e41"></circle>
                                        <path d="M531.5098,157.67094A106.89328,106.89328,0,0,1,679.677,146.461c-.87424-.83106-1.73925-1.66885-2.64768-2.47643A106.91251,106.91251,0,0,0,534.96321,303.79182c.90844.80758,1.84178,1.56849,2.76952,2.33937A106.89337,106.89337,0,0,1,531.5098,157.67094Z" transform="translate(-49.50001 -116.97455)" fill="#2f2e41"></path>
                                        <circle cx="565.01268" cy="144.17807" r="68.8589" fill="#ffb8b8"></circle>
                                        <path d="M565.58663,282.89754s9.06039,83.35551-5.43622,92.41589,83.35551,21.74492,83.35551,21.74492-14.49662-90.60382,21.74491-114.16081Z" transform="translate(-49.50001 -116.97455)" fill="#ffb8b8"></path>
                                        <path d="M652.5663,360.81682s26.98248-12.60018-11.87783-8.11216-72.38788-12.72672-72.38788-12.72672-11.77434-11.77849-13.58641.906,5.43623,36.24153-34.42945,39.86568-76.10721-7.2483-90.60382,19.93284-7.2483,144.9661-7.2483,144.9661,27.18114,97.85213,48.92606,112.34874,212.01292-5.43623,212.01292-5.43623L737.73388,554.709V440.54818s-7.2483-39.86568-57.98644-28.99322c0,0-32.61737-7.24831-30.8053-23.557S652.5663,360.81682,652.5663,360.81682Z" transform="translate(-49.50001 -116.97455)" fill="#d0cde1"></path>
                                        <path d="M478.55,727.24542c1.12-4.88,1.87-7.64,1.87-7.64l-.57995-3.97-5.97-40.54-2.51-17.1c21.74-9.06,27.18-50.74,27.18-50.74l.82-.49,3.71-2.22v-.01l13.32-7.99.27-.16,5.38,3.58,10.93,7.29c38.24,28.12,77.18,27.62,101.21,23.19,14.69-2.71,23.82-6.88,23.82-6.88l26.36-8.79.82-.27.81.12,15.46,2.34.28.05,1.28.19-3.58,24.75-5.19,35.97c13.71,7.26,25.9,20.9,36.56,37.71q3.54,5.58,6.86,11.61c2.88,5.2,5.63,10.61,8.25,16.15.32.66.63,1.33.94,2,1.01,2.17,2.01,4.36,2.98005,6.56H473.75c.36-2.21.72-4.32,1.07-6.35a1.54822,1.54822,0,0,0,.04-.21c.13-.68.25-1.34.36-2C476.44,736.79541,477.62,731.28546,478.55,727.24542Z" transform="translate(-49.50001 -116.97455)" fill="#2f2e41"></path>
                                        <path d="M467.73451,378.93759s19.93284,36.24152,12.68454,81.54343S502.164,618.13166,502.164,618.13166l21.74492-5.43623s-14.49661-94.228-10.87246-115.97289,3.62415-106.9125-14.49661-117.78495S467.73451,378.93759,467.73451,378.93759Z" transform="translate(-49.50001 -116.97455)" fill="#2f2e41"></path>
                                        <path d="M678.47286,416.59979l7.61685,200.62583,14.49661,9.06038s20.83888-220.16727,9.96642-220.16727H688.4302A9.97043,9.97043,0,0,0,678.47286,416.59979Z" transform="translate(-49.50001 -116.97455)" fill="#2f2e41"></path>
                                        <circle cx="462.63037" cy="487.56653" r="9.06038" fill="#4299e1"></circle>
                                        <circle cx="643.838" cy="496.62692" r="9.06038" fill="#4299e1"></circle>
                                        <polygon points="506.12 58.104 506.12 126.963 522.067 126.963 542.362 105.218 539.644 126.963 610.133 126.963 605.784 105.218 614.482 126.963 625.717 126.963 625.717 58.104 506.12 58.104" fill="#2f2e41"></polygon>
                                        <ellipse cx="495.24775" cy="129.68146" rx="5.43623" ry="9.96642" fill="#ffb8b8"></ellipse>
                                        <ellipse cx="634.77762" cy="129.68146" rx="5.43623" ry="9.96642" fill="#ffb8b8"></ellipse>
                                        <path d="M721.4252,612.69543s-82.44948-15.40265-87.8857,11.77849,91.50985,15.40265,91.50985,15.40265Z" transform="translate(-49.50001 -116.97455)" fill="#ffb8b8"></path>
                                        <path d="M719.61312,426.05157S917.12944,583.70221,880.88791,621.75581,706.92859,648.937,706.92859,648.937l9.06038-45.3019,79.73135-9.06038L755.85465,554.709l-36.24153,3.62415Z" transform="translate(-49.50001 -116.97455)" fill="#d0cde1"></path>
                                        <path d="M427.86884,688.80263l25.36906,19.93284s18.12077,56.17437,45.30191,39.86568S473.17074,674.306,473.17074,674.306l-30.80529-10.87246Z" transform="translate(-49.50001 -116.97455)" fill="#ffb8b8"></path>
                                        <path d="M453.2379,397.05835l-25.30065,7.61381s-175.83982,130.104-183.08812,166.34551S279.27858,627.192,279.27858,627.192l157.65064,74.29513,16.30868-43.48983-74.29513-38.05361s5.43623-10.87245-16.30868-12.68453S337.265,581.89013,337.265,581.89013s43.48983-67.04682,67.04682-52.55021,30.8053,25.36907,30.8053,25.36907Z" transform="translate(-49.50001 -116.97455)" fill="#d0cde1"></path>
                                        <path d="M814.1,733.45544v6.07a13.34008,13.34008,0,0,1-.91,4.87,13.68227,13.68227,0,0,1-.97,2,13.4373,13.4373,0,0,1-11.55,6.56H354.12a13.43736,13.43736,0,0,1-11.55-6.56,13.68842,13.68842,0,0,1-.97-2,13.34153,13.34153,0,0,1-.91-4.87v-6.07a13.42641,13.42641,0,0,1,13.43-13.43h25.74v-2.83a.55908.55908,0,0,1,.56-.56h13.43a.55908.55908,0,0,1,.56.56v2.83h8.39v-2.83a.55908.55908,0,0,1,.56-.56h13.43a.55908.55908,0,0,1,.56.56v2.83h8.4v-2.83a.55908.55908,0,0,1,.56-.56h13.43a.55908.55908,0,0,1,.56.56v2.83h8.39v-2.83a.55908.55908,0,0,1,.56-.56h13.43a.55908.55908,0,0,1,.56.56v2.83h8.39v-2.83a.55908.55908,0,0,1,.56-.56h13.43a.55908.55908,0,0,1,.56.56v2.83h8.4v-2.83a.55908.55908,0,0,1,.56-.56h13.43a.55908.55908,0,0,1,.56.56v2.83h8.39v-2.83a.55908.55908,0,0,1,.56-.56h105.2a.55908.55908,0,0,1,.56.56v2.83h8.4v-2.83a.55908.55908,0,0,1,.56-.56h13.43a.56552.56552,0,0,1,.56.56v2.83h8.39v-2.83a.55908.55908,0,0,1,.56-.56h13.43a.55908.55908,0,0,1,.56.56v2.83h8.39v-2.83a.55908.55908,0,0,1,.56-.56h13.43a.55908.55908,0,0,1,.56.56v2.83h8.4v-2.83a.55908.55908,0,0,1,.56-.56h13.43a.557.557,0,0,1,.55.56v2.83h8.4v-2.83a.55908.55908,0,0,1,.56-.56H738a.55908.55908,0,0,1,.56.56v2.83h8.39v-2.83a.55908.55908,0,0,1,.56-.56h13.43a.55908.55908,0,0,1,.56.56v2.83h39.17A13.42636,13.42636,0,0,1,814.1,733.45544Z" transform="translate(-49.50001 -116.97455)" fill="#3f3d56"></path>
                                        <rect x="161.44819" y="627.41618" width="732.99951" height="2" fill="#3f3d56"></rect>
                                        <path d="M778.14246,477.82126H611.69957v-3.43053H536.22789v3.43053h-167.129a11.25861,11.25861,0,0,0-11.25861,11.25861v227.9115A11.25864,11.25864,0,0,0,369.09889,728.25H778.14246a11.25864,11.25864,0,0,0,11.25861-11.25865V489.07987A11.2586,11.2586,0,0,0,778.14246,477.82126Z" transform="translate(-49.50001 -116.97455)" fill="#3f3d56"></path>
                                        <circle cx="524.44819" cy="440.41618" r="25" fill="none" stroke="#d0cde1" stroke-miterlimit="10" stroke-width="2"></circle>
                                        <circle cx="516.44819" cy="449.41618" r="25" fill="#d0cde1"></circle>
                                        <rect x="26.02015" y="663.55077" width="189" height="2.26159" fill="#3f3d56"></rect>
                                        <rect x="851.02015" y="663.55077" width="189" height="2.26159" fill="#3f3d56"></rect>
                                        <path d="M185.63919,707.69176c-19.911,32.5064-13.06067,72.9409-13.06067,72.9409s39.1325-12.26879,59.04353-44.7752,13.06067-72.9409,13.06067-72.9409S205.55022,675.18536,185.63919,707.69176Z" transform="translate(-49.50001 -116.97455)" fill="#3f3d56"></path>
                                        <path d="M171.76594,780.90107l-1.13209-.17932c-.40938-.06491-41.158-6.81651-65.56214-36.01491-24.40427-29.19937-23.817-70.4997-23.809-70.91351l.02429-1.14573,1.13209.17932c.40939.06492,41.158,6.81651,65.56228,36.01588h0c24.40414,29.19841,23.81684,70.49874,23.80885,70.91255Z" transform="translate(-49.50001 -116.97455)" fill="#4299e1"></path>
                                        <path d="M173.37365,781.92912l-1.09375-.34277c-.39551-.124-39.7207-12.75586-59.59766-45.20605-19.87695-32.45118-13.26269-73.22266-13.19433-73.63086l.1914-1.12989,1.09375.34278c.39551.124,39.72071,12.75586,59.59766,45.207h0c19.87695,32.45019,13.2627,73.22168,13.19434,73.62988Zm-72.081-117.67773c-.90528,6.84277-4.51368,42.33594,13.09472,71.084,17.60938,28.74707,50.86719,41.65821,57.373,43.96192.90527-6.84278,4.51367-42.33594-13.09473-71.083h0C141.05627,679.46623,107.79846,666.5551,101.2926,664.25139Z" transform="translate(-49.50001 -116.97455)" fill="#3f3d56"></path>
                                        <circle cx="124.32091" cy="536.32762" r="22" fill="#3f3d56"></circle>
                                        <polygon points="399.789 258.254 273.582 131.051 214 131.051 214 129.051 274.417 129.051 274.711 129.348 401.211 256.848 399.789 258.254" fill="#3f3d56"></polygon>
                                        <polygon points="696.211 254.254 822.417 127.051 882 127.051 882 125.051 821.582 125.051 821.289 125.348 694.789 252.848 696.211 254.254" fill="#3f3d56"></polygon>
                                        <rect x="0.00009" y="68.33964" width="145.99988" height="28.87712" fill="#d0cde1"></rect>
                                        <rect x="0.00009" y="112.65108" width="145.99988" height="28.87712" fill="#d0cde1"></rect>
                                        <rect x="0.00009" y="156.96251" width="145.99988" height="28.87712" fill="#d0cde1"></rect>
                                        <rect x="0.0001" y="68.33965" width="60.39875" height="28.87712" opacity="0.15"></rect>
                                        <rect y="112.65105" width="19.55356" height="28.87712" opacity="0.15"></rect>
                                        <rect x="0.00009" y="156.96251" width="97.33325" height="28.87712" opacity="0.15"></rect>
                                        <rect x="954.7761" y="74.82702" width="146.22388" height="13.02985" fill="#d0cde1"></rect>
                                        <rect x="899.99998" y="73.14045" width="28.95522" height="28.95522" fill="#4299e1"></rect>
                                        <rect x="899.99998" y="116.57329" width="28.95522" height="28.95522" fill="#4299e1"></rect>
                                        <rect x="899.99998" y="160.00612" width="28.95522" height="28.95522" fill="#4299e1"></rect>
                                        <path d="M986.45507,213.07037H955.5V182.1148h30.95508Zm-28.95508-2h26.95508V184.1148H957.5Z" transform="translate(-49.50001 -116.97455)" fill="#3f3d56"></path>
                                        <rect x="954.7761" y="118.25985" width="146.22388" height="13.02985" fill="#d0cde1"></rect>
                                        <path d="M986.45507,256.503H955.5V225.54791h30.95508Zm-28.95508-2h26.95508V227.54791H957.5Z" transform="translate(-49.50001 -116.97455)" fill="#3f3d56"></path>
                                        <rect x="954.7761" y="161.69269" width="146.22388" height="13.02985" fill="#d0cde1"></rect>
                                        <path d="M986.45507,299.93561H955.5V268.98053h30.95508Zm-28.95508-2h26.95508V270.98053H957.5Z" transform="translate(-49.50001 -116.97455)" fill="#3f3d56"></path>
                                        <circle cx="188.99998" cy="83.0509" r="16" fill="#4299e1"></circle>
                                        <circle cx="188.99998" cy="131.0509" r="16" fill="#4299e1"></circle>
                                        <circle cx="188.99998" cy="174.0509" r="16" fill="#4299e1"></circle>
                                        <path d="M230.5,213.02545a17,17,0,1,1,17-17A17.019,17.019,0,0,1,230.5,213.02545Zm0-32a15,15,0,1,0,15,15A15.017,15.017,0,0,0,230.5,181.02545Z" transform="translate(-49.50001 -116.97455)" fill="#3f3d56"></path>
                                        <path d="M230.5,261.02545a17,17,0,1,1,17-17A17.019,17.019,0,0,1,230.5,261.02545Zm0-32a15,15,0,1,0,15,15A15.017,15.017,0,0,0,230.5,229.02545Z" transform="translate(-49.50001 -116.97455)" fill="#3f3d56"></path>
                                        <path d="M230.5,304.02545a17,17,0,1,1,17-17A17.019,17.019,0,0,1,230.5,304.02545Zm0-32a15,15,0,1,0,15,15A15.017,15.017,0,0,0,230.5,272.02545Z" transform="translate(-49.50001 -116.97455)" fill="#3f3d56"></path>
                                        <path d="M1038.5,713.02545h-2v-15a3.00328,3.00328,0,0,1,3-3h5a1.00067,1.00067,0,0,0,1-1v-10a1.00067,1.00067,0,0,0-1-1h-5a3.00328,3.00328,0,0,1-3-3v-5a1.00067,1.00067,0,0,0-1-1h-9a3.00328,3.00328,0,0,1-3-3v-1a1.00067,1.00067,0,0,0-1-1h-36a1.00067,1.00067,0,0,0-1,1v1a3.00328,3.00328,0,0,1-3,3h-9a1.00067,1.00067,0,0,0-1,1v5a3.00328,3.00328,0,0,1-3,3h-5a1.00067,1.00067,0,0,0-1,1v10a1.00067,1.00067,0,0,0,1,1h6a3.00328,3.00328,0,0,1,3,3v15h-2v-15a1.00067,1.00067,0,0,0-1-1h-6a3.00328,3.00328,0,0,1-3-3v-10a3.00328,3.00328,0,0,1,3-3h5a1.00067,1.00067,0,0,0,1-1v-5a3.00328,3.00328,0,0,1,3-3h9a1.00067,1.00067,0,0,0,1-1v-1a3.00328,3.00328,0,0,1,3-3h36a3.00328,3.00328,0,0,1,3,3v1a1.00067,1.00067,0,0,0,1,1h9a3.00328,3.00328,0,0,1,3,3v5a1.00067,1.00067,0,0,0,1,1h5a3.00328,3.00328,0,0,1,3,3v10a3.00328,3.00328,0,0,1-3,3h-5a1.00067,1.00067,0,0,0-1,1Z" transform="translate(-49.50001 -116.97455)" fill="#3f3d56"></path>
                                        <path d="M1035.5,783.02545h-61a3.00328,3.00328,0,0,1-3-3v-43h2v43a1.00067,1.00067,0,0,0,1,1h61a1.00067,1.00067,0,0,0,1-1v-43h2v43A3.00328,3.00328,0,0,1,1035.5,783.02545Z" transform="translate(-49.50001 -116.97455)" fill="#3f3d56"></path>
                                        <rect x="921.99998" y="603.0509" width="79" height="24" rx="2" fill="#4299e1"></rect>
                                        <path d="M1042,738.02545H967a3.00328,3.00328,0,0,1-3-3v-20a3.00328,3.00328,0,0,1,3-3h75a3.00328,3.00328,0,0,1,3,3v20A3.00328,3.00328,0,0,1,1042,738.02545Zm-75-24a1.00067,1.00067,0,0,0-1,1v20a1.00067,1.00067,0,0,0,1,1h75a1.00067,1.00067,0,0,0,1-1v-20a1.00067,1.00067,0,0,0-1-1Z" transform="translate(-49.50001 -116.97455)" fill="#3f3d56"></path>
                                        <path d="M1002.5,660.02545v0a249.6283,249.6283,0,0,1-2.09463-54.11121L1002.5,576.02545h0c-11.54175,22.96553-8.93335,53.1922,0,83.99993Z" transform="translate(-49.50001 -116.97455)" fill="#d0cde1"></path>
                                        <path d="M1011.5,665.02545v0a183.49687,183.49687,0,0,1-1.00779-32.20905L1011.5,615.02545h0c-5.55309,13.67-4.29811,31.662,0,50Z" transform="translate(-49.50001 -116.97455)" fill="#d0cde1"></path>
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div class="py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
<div>
  <h3 class="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>
  <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                <div class="flex items-center p-8 bg-white shadow rounded-lg">
                    <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
                    </div>
                    <div>
                        <span class="block text-2xl font-bold">10</span>
                        <span class="block text-gray-500">Courses</span>
                    </div>
                </div>
                <div class="flex items-center p-8 bg-white shadow rounded-lg">
                    <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
                    </div>
                    <div>
                        <span class="block text-2xl font-bold">6.8</span>
                        <span class="block text-gray-500">Average mark</span>
                    </div>
                </div>
                <div class="flex items-center p-8 bg-white shadow rounded-lg">
                    <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path>
              </svg>
                    </div>
                    <div>
                        <span class="inline-block text-2xl font-bold">4</span>
                        <span class="inline-block text-xl text-gray-500 font-semibold">(40%)</span>
                        <span class="block text-gray-500">Number Of Courses Completed</span>
                    </div>
                </div>
                <div class="flex items-center p-8 bg-white shadow rounded-lg">
                    <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
                    </div>
                    <div>
                        <span class="block text-2xl font-bold">83%</span>
                        <span class="block text-gray-500">Finished homeworks for this week</span>
                    </div>
                </div>
            </section>
  
</div>
          
<div class="flow-root pt-8">
  <ul role="list" class="-mb-8">
    <li>
      <div class="relative pb-8">
        <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
        <div class="relative flex space-x-3">
          <div>
            <span class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
              <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
            </span>
          </div>
          <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
            <div>
              <p class="text-sm text-gray-500">Applied to <a href="#" class="font-medium text-gray-900">Front End Developer</a></p>
            </div>
            <div class="text-right text-sm whitespace-nowrap text-gray-500">
              <time datetime="2020-09-20">Sep 20</time>
            </div>
          </div>
        </div>
      </div>
    </li>

    <li>
      <div class="relative pb-8">
        <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
        <div class="relative flex space-x-3">
          <div>
            <span class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
              <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
              </svg>
            </span>
          </div>
          <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
            <div>
              <p class="text-sm text-gray-500">Advanced to phone screening by <a href="#" class="font-medium text-gray-900">Bethany Blake</a></p>
            </div>
            <div class="text-right text-sm whitespace-nowrap text-gray-500">
              <time datetime="2020-09-22">Sep 22</time>
            </div>
          </div>
        </div>
      </div>
    </li>

    <li>
      <div class="relative pb-8">
        <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
        <div class="relative flex space-x-3">
          <div>
            <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
              <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </span>
          </div>
          <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
            <div>
              <p class="text-sm text-gray-500">Completed phone screening with <a href="#" class="font-medium text-gray-900">Martha Gardner</a></p>
            </div>
            <div class="text-right text-sm whitespace-nowrap text-gray-500">
              <time datetime="2020-09-28">Sep 28</time>
            </div>
          </div>
        </div>
      </div>
    </li>

    <li>
      <div class="relative pb-8">
        <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
        <div class="relative flex space-x-3">
          <div>
            <span class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
              <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
              </svg>
            </span>
          </div>
          <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
            <div>
              <p class="text-sm text-gray-500">Advanced to interview by <a href="#" class="font-medium text-gray-900">Bethany Blake</a></p>
            </div>
            <div class="text-right text-sm whitespace-nowrap text-gray-500">
              <time datetime="2020-09-30">Sep 30</time>
            </div>
          </div>
        </div>
      </div>
    </li>

    <li>
      <div class="relative pb-8">
        <div class="relative flex space-x-3">
          <div>
            <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
              <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </span>
          </div>
          <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
            <div>
              <p class="text-sm text-gray-500">Completed interview with <a href="#" class="font-medium text-gray-900">Katherine Snyder</a></p>
            </div>
            <div class="text-right text-sm whitespace-nowrap text-gray-500">
              <time datetime="2020-10-04">Oct 4</time>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>

        </div>
      </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
