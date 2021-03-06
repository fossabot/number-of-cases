import { ArrayGenerator } from "../indexes/ArrayGenerator";
import { IPermutation } from "../indexes/IPermutation";

/**
 * A repeated-permutation case generator.
 * 
 * <sub>n</sub>��<sub>r</sub>
 * 
 * @author Jeongho Nam <http://samchon.org>
 */
export class RepeatedPermutation 
	extends ArrayGenerator<RepeatedPermutation>
	implements IPermutation<RepeatedPermutation>
{
	/**
	 * @hidden
	 */
	private size_: number;

	/**
	 * @hidden
	 */
	private n_: number;

	/**
	 * @hidden
	 */
	private r_: number;

	/**
	 * @hidden
	 */
	private dividers_: Array<number>;

	/* ---------------------------------------------------------------
		CONSTRUCTORS
	--------------------------------------------------------------- */
	/**
	 * Construct from size of N and R.
	 * 
	 * @param n Size of candidates.
	 * @param r Size of elements of each case.
	 */
	public constructor(n: number, r: number)
	{
		super();

		this.n_ = n;
		this.r_ = r;
		this.size_ = Math.pow(n, r);

		this.dividers_ = new Array<number>();

		for (let i: number = 0; i < r; i++)
		{
			let x: number = r - (i + 1);
			let val: number = Math.pow(n, x);

			this.dividers_.push(val);
		}
	}

	/* -----------------------------------------------------------
		ACCESSORS
	----------------------------------------------------------- */
	/**
	 * @inheritdoc
	 */
	public size(): number
	{
		return this.size_;
	}

	/**
	 * Get N, number of candidates.
	 */
	public n(): number
	{
		return this.n_;
	}

	/**
	 * Get R, number of elements for each case.
	 */
	public r(): number
	{
		return this.r_;
	}

	/* -----------------------------------------------------------
		COMPUTATION
	----------------------------------------------------------- */
	/**
	 * @inheritdoc
	 */
	public at(index: number): Array<number>
	{
		let row: Array<number> = [];
		for (let i: number = 0; i < this.r_; i++)
		{
			let val: number = Math.floor(index / this.dividers_[i]) % this.n_;
			row.push(val);
		}
		return row;
	}
}