function microtime()
{
	return new Date().getTime()*0.001;
}

// returns a random integer from min to max
function irand(min, max)
{
	return Math.floor((min||0) + Math.random() * ((max+1||100) - (min||0)));
}

// returns a random float from min to max
function frand(min, max)
{
	return (min||0) + Math.random() * ((max||1) - (min||0));
}

function clamp(value, min, max)
{
	return Math.min(Math.max(value, min), max);
}

// Two component vector class
function Vector2(x, y)
{
	this.x = x || 0;
	this.y = y || 0;
	
	this.add = function(other)
	{
		this.x += other.x;
		this.y += other.y;
	}
	
	this.magnitude = function()
	{
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
}

function Color(r, g, b)
{
	this.r = r || 0;
	this.g = g || 0;
	this.b = b || 0;
}