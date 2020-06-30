import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import ChartCard from 'components/dashboard/Common/ChartCard';
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import CustomLineChart from "components/CustomLineChart/index";
import VideoImages from "./VideoImages";
import CountUp from 'react-countup';
import Avatar from '@material-ui/core/Avatar';
import axios from 'util/Api';

const data1 = [
    { name: 'Let A', uv: 40, pv: 10, amt: 20 },
    { name: 'Let B', uv: 30, pv: 23, amt: 21 },
    { name: 'Let C', uv: 60, pv: 98, amt: 29 },
    { name: 'Let D', uv: 27, pv: 39, amt: 20 },
    { name: 'Let E', uv: 78, pv: 48, amt: 28 },
    { name: 'Let F', uv: 23, pv: 38, amt: 20 },
    { name: 'Let G', uv: 56, pv: 43, amt: 20 },
];
const data2 = [
    { name: 'Let A', uv: 20, pv: 24, amt: 20 },
    { name: 'Let B', uv: 50, pv: 53, amt: 21 },
    { name: 'Let C', uv: 60, pv: 78, amt: 29 },
    { name: 'Let D', uv: 30, pv: 49, amt: 20 },
    { name: 'Let E', uv: 78, pv: 78, amt: 28 },
    { name: 'Let F', uv: 23, pv: 98, amt: 20 },
    { name: 'Let G', uv: 96, pv: 83, amt: 20 },
];
const data3 = [
    { name: 'Let A', uv: 40, pv: 62, amt: 20 },
    { name: 'Let B', uv: 30, pv: 13, amt: 21 },
    { name: 'Let C', uv: 60, pv: 98, amt: 29 },
    { name: 'Let D', uv: 27, pv: 39, amt: 20 },
    { name: 'Let E', uv: 78, pv: 48, amt: 28 },
    { name: 'Let F', uv: 23, pv: 38, amt: 20 },
    { name: 'Let G', uv: 56, pv: 43, amt: 20 },
];
// const signUpData = {
//     chartData: [10, 200, 75, 300, 100, 200, 70],
//     labels: ['9', '10', '11', '12', '13', '14', '15'],
// };
// const totalViewsData = {
//     chartData: [100, 200, 750, 300, 1000, 280, 7000],
//     labels: ['9', '10', '11', '12', '13', '14', '15'],
// };

// const totalRevenueData = {
//     chartData: [200, 50, 250, 100, 370, 100],
//     labels: ['9', '10', '11', '12', '13', '14'],
// }
const customers = [
    {
        id: 1,
        avatar: 'https://via.placeholder.com/150x150',
        name: "--- ---",
        email: "---@---.---",
        role: { name: "---" },
        color: "success"
    }
];
const videoImageList = [
    {
        id: 1,
        cover: 'https://via.placeholder.com/150x150',
        title: '-- ---',
        rating: '-.-',
        views: '--'
    },
    {
        id: 2,
        cover: 'https://via.placeholder.com/150x150',
        title: "-- ---",
        rating: '-.-',
        views: '--'
    },
    {
        id: 3,
        cover: 'https://via.placeholder.com/150x150',
        title: '-- ---',
        rating: '-.-',
        views: '--'
    },
    {
        id: 4,
        cover: 'https://via.placeholder.com/150x150',
        title: '-- ---',
        rating: '-.-',
        views: '--'
    },
    {
        id: 5,
        cover: 'https://via.placeholder.com/150x150',
        title: '-- ---',
        rating: '-.-',
        views: '--'
    },
]
const UserDetailCell = ({ data }) => {
    const { id, name, role, avatar, email, color } = data;
    return (
        <tr
            tabIndex={-1}
            key={id}>
            <td className="border-bottom border-top-0">
                <div className="user-profile d-flex flex-row align-items-center">
                    <Avatar
                        alt={name}
                        src={avatar}
                        className="user-avatar mr-2"
                    />
                    <div className="user-detail">
                        <h5 className="user-name text-capitalize">{name}</h5>
                        <p className="user-description">{email}</p>
                    </div>
                </div>
            </td>
            <td className="text-right border-bottom border-top-0">
                <span className={`jr-link badge text-white text-uppercase bg-${color ? color : "success"}`}>{role.name}</span>
            </td>
            {console.log(`text-uppercase bg-${color}`)}
        </tr>

    );
};


const UserDetailTable = ({ data, tableStyle }) => {
    return (
        <div className="table-responsive-material table-userdetail-mmin">
            <table className={`default-table table-sm table full-table mb-0 ${tableStyle}`}>
                <tbody>
                    {data.map((data, index) => {
                        return (
                            <UserDetailCell key={data.id} data={data} />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
const CardHeader = (props) => {
    const { heading, subHeading } = props;
    let { styleName } = props;
    return (
        <div className={`jr-card-header d-flex align-items-start ${styleName}`}>
            <div className="mr-auto">
                <h3 className="card-heading">{heading}</h3>
                {subHeading && <p className="sub-heading">{subHeading}</p>}
            </div>
        </div>
    )
}
class MetricsPage extends React.Component {
    _isMounted = false;
    constructor() {
        super();
        this.state = {
            users: 0,
            views: 0,
            revenue: 0,
            customers: customers,
            videos: videoImageList
        };
    }
    componentWillMount() {
        this._isMounted = true;
        if (this._isMounted) {
            axios.get('/state')
                .then(({ data }) => {
                    console.log("ASDFASDFASdf  res : ", data)
                    this.setState({
                        users: data.total_users,
                        views: data.total_views,
                        revenue: data.total_revenue,
                        customers: data.recent_customers,
                        videos: data.trending_videos
                    });
                })
                .catch(error => {
                    console.error("!!! Metric page api error !!");
                });
        }
    }
    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title="Metrics Page" />
                <div className="row">
                    {/* Satistic cards */}
                    <div className="col-lg-4 col-sm-4 col-12">
                        <ChartCard styleName="bg-gradient-primary text-white">
                            <div className="chart-title">
                                <h2 className="mb-1">
                                    <CountUp
                                        separator=","
                                        end={this.state.users}
                                    />
                                </h2>
                                <p>Online SignUps</p>
                            </div>

                            <ResponsiveContainer width="100%" height={110}>
                                {/* <CustomLineChart
                                    chartData={signUpData.chartData}
                                    labels={signUpData.labels}
                                    borderColor="#FFF"
                                    pointBorderColor="#FFF"
                                    pointBackgroundColor="#FF9800"
                                    pointBorderWidth={2}
                                    pointRadius={4}
                                    lineTension={0} /> */}
                                <AreaChart data={data1} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                                    <Area type="monotone" dataKey="pv" stroke="rgba(255,255,255,0.5)" activeDot={{ r: 8 }}
                                        fillOpacity={.5}
                                        fill="rgba(255,255,255,0.8)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </ChartCard>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-12">
                        <ChartCard styleName="bg-cyan text-white">
                            <div className="chart-title">
                                <h2 className="mb-1">
                                    <CountUp
                                        separator=","
                                        end={this.state.views}
                                    />
                                </h2>
                                <p>Total Views</p>
                            </div>


                            <ResponsiveContainer width="100%" height={110}>
                                <AreaChart data={data2} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                                    <Area type="monotone" dataKey="pv" stroke="rgba(255,255,255,0.5)" activeDot={{ r: 8 }}
                                        fillOpacity={.5}
                                        fill="rgba(255,255,255,0.8)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </ChartCard>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-12">
                        <ChartCard styleName="bg-secondary text-white">
                            <div className="chart-title">
                                <h2 className="mb-1">
                                    <CountUp
                                        prefix="$"
                                        separator=","
                                        end={this.state.revenue}
                                    />
                                </h2>
                                <p>Total Revenue</p>
                            </div>

                            <ResponsiveContainer width="100%" height={110}>
                                <AreaChart data={data3} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                                    <Area type="monotone" dataKey="pv" stroke="rgba(255,255,255,0.5)" activeDot={{ r: 8 }}
                                        fillOpacity={.5}
                                        fill="rgba(255,255,255,0.8)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </ChartCard>
                    </div>
                </div>
                <div className="row">
                    {/* Most viewed videos */}
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12 order-sm-1">
                        <VideoImages data={this.state.videos} />
                    </div>
                </div>
                <div className="row">
                    {/* new customers */}
                    <div className="col-xl-5 col-lg-8 col-md-7 col-12">
                        <div className="jr-card jr-full-card">
                            <CardHeader
                                heading="New Customers"
                                subHeading="new recently"
                            />
                            <UserDetailTable data={this.state.customers} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MetricsPage;