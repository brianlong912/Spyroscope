%Made by Brian Long

clear all
clf

%input arguments
R = 1; %unit radius for larger circle
rcircle = .56; %input('Radius of moving circle (between 0 and 1): ');
multiply = .8; %input('Position of pen relative to size of circle (between 0 and 1): ');
r = rcircle* multiply; 
Npart = 100; %input('Number of partitions to divide large circle: ');
Nsteps = 2e3; %input('Number of steps to run: ');

t = 0;
dTheta1 = 2*pi/Npart;
dTheta2 = -dTheta1*(1/rcircle-1);
theta1 = 0;
theta2 = 0;
center = R-rcircle;
x = center+r;
y = 0;
z = 0;

h = animatedline(x,y);
window = 1;
axis([-window window -window window]);

for i = 1:Nsteps
    addpoints(h,x,y);
    drawnow;
%     pause(.001);
    
    %calculate next position
    theta1 = theta1 + dTheta1;
    theta2 = theta2 + dTheta2;
    x = center*cos(theta1) + r*cos(theta2);
    y = center*sin(theta1) + r*sin(theta2);
end