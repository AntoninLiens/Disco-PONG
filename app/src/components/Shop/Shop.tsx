import NavBar from "../NavBar/NavBar"
import "./Shop.css"
import { ImCoinDollar } from "react-icons/im"
import { useParams } from "react-router-dom"

export default function Shop() {

	let {id} = useParams();
	if (!id)
		id = "error";

	return (
		<div className="ShopPage">
			<div className="shopTitle">
				<h2>Disco-PONG</h2>
				<h1>SHOP</h1>
			</div>
			<NavBar id={id}/>
			<ul className="shopList">
				<li className="shopItem">
					<a href="#"></a>
					<span><ImCoinDollar color={"gold"} size={"24px"}/></span>
				</li>
				<li className="shopItem">
					<a href="#"></a>
					<span><ImCoinDollar color={"gold"} size={"24px"}/></span>
				</li>
				<li className="shopItem">
					<a href="#"></a>
					<span><ImCoinDollar color={"gold"} size={"24px"}/></span>
				</li>
				<li className="shopItem">
					<a href="#"></a>
					<span><ImCoinDollar color={"gold"} size={"24px"}/></span>
				</li>
				<li className="shopItem">
					<a href="#"></a>
					<span><ImCoinDollar color={"gold"} size={"24px"}/></span>
				</li>
				<li className="shopItem">
					<a href="#"></a>
					<span><ImCoinDollar color={"gold"} size={"24px"}/></span>
				</li>
				<li className="shopItem">
					<a href="#"></a>
					<span><ImCoinDollar color={"gold"} size={"24px"}/></span>
				</li>
				<li className="shopItem">
					<a href="#"></a>
					<span><ImCoinDollar color={"gold"} size={"24px"}/></span>
				</li>
				<li className="shopItem">
					<a href="#"></a>
					<span><ImCoinDollar color={"gold"} size={"24px"}/></span>
				</li>
				<li className="shopItem">
					<a href="#"></a>
					<span><ImCoinDollar color={"gold"} size={"24px"}/></span>
				</li>
				<li className="shopItem">
					<a href="#"></a>
					<span><ImCoinDollar color={"gold"} size={"24px"}/></span>
				</li>
				<li className="shopItem">
					<a href="#"></a>
					<span><ImCoinDollar color={"gold"} size={"24px"}/></span>
				</li>
				<li className="shopItem">
					<a href="#"></a>
					<span><ImCoinDollar color={"gold"} size={"24px"}/></span>
				</li>
				<li className="shopItem">
					<a href="#"></a>
					<span><ImCoinDollar color={"gold"} size={"24px"}/></span>
				</li>
				<li className="shopItem">
					<a href="#"></a>
					<span><ImCoinDollar color={"gold"} size={"24px"}/></span>
				</li>
			</ul>
		</div>
	)
}