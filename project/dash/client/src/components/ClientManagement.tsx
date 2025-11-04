import React from 'react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const mockClients = [
  { id: 1, name: 'Sarah Johnson', business: 'Sarah\'s Bakery', status: 'Active', lastActivity: '2 hours ago' },
  { id: 2, name: 'Mike Chen', business: 'Chen Auto Repair', status: 'Active', lastActivity: '1 day ago' },
  { id: 3, name: 'Lisa Rodriguez', business: 'Rodriguez Law', status: 'Pending', lastActivity: '3 days ago' },
  { id: 4, name: 'David Kim', business: 'Kim\'s Cleaners', status: 'Active', lastActivity: '5 hours ago' },
];

export function ClientManagement() {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6" />
          <h3 className="text-xl font-bold">Client Management</h3>
        </div>
        <Button size="sm" className="glass">
          <Plus className="w-4 h-4 mr-2" />
          Add Client
        </Button>
      </div>

      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search clients..." className="pl-10 glass" />
        </div>
      </div>

      <div className="space-y-3">
        {mockClients.map((client) => (
          <div key={client.id} className="flex items-center justify-between p-3 rounded-lg glass hover:bg-card/50 transition-colors">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${client.name}`} />
                <AvatarFallback>{client.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{client.name}</p>
                <p className="text-sm text-muted-foreground">{client.business}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant={client.status === 'Active' ? 'default' : 'secondary'} className="glass">
                {client.status}
              </Badge>
              <span className="text-sm text-muted-foreground">{client.lastActivity}</span>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}